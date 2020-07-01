import http from 'http';
import https from 'https';

export interface RawImageInfo {
	buffer: Buffer
	contentType: string
}

export interface SaImageUtilsInterface {
	getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo>
	rawImageToBase64(imageInfo: RawImageInfo): string
}

export class SaImageUtils implements SaImageUtilsInterface {
	private getMessageFromException(e: any){
		if (!e) {
			return 'unknown exception'
		}
		return (e.stack ? e.stack.split('\n') : e).toString();
	}

	getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo> {
		return new Promise<RawImageInfo>((resolve, reject) => {
			if ((imageUrl || '').trim().length === 0 || typeof imageUrl !== 'string') {
				reject('SaImageUtils: Error: invalid parameter imageUrl');
			} else {
				try {
					// perform get request and read image into buffer
					let client: any = http;
					// if starts with https, use https client
					if (imageUrl.indexOf('https') === 0) {
						client = https;
					}

					client.get(imageUrl, (res: any) => {
						if (res.statusCode !== 200) {
							const errMsg = `getRawImageFromUrl: Error: statusCode is ${ res.statusCode }`;
							reject(errMsg);
						} else {
							const contentType = res.headers['content-type'];

							let bufArray: any = [];
							res.on('data', (chunk: any) => {
								bufArray.push(chunk);
							});
							
							res.on('end', () => {
								if (bufArray.length > 0) {
									// if not empty, concat buffer
									const buffer = Buffer.concat(bufArray);
									
									// return buffer to caller
									resolve({
										buffer: buffer,
										contentType: contentType
									});
								} else {
									const errMsg = `getRawImageFromUrl: Error: Empty Buffer`;
									reject(errMsg);
								}
							});
							
						}
					});
				} catch(e) {
					reject(this.getMessageFromException(e));
				}
			}
		})
	}

	rawImageToBase64(imageInfo: RawImageInfo): string {
		const { contentType, buffer } = imageInfo
		if (!contentType) {
			throw Error('rawImageToBase64: Invalid contentType')
		}if (!buffer || buffer.length === 0) {
			throw Error('rawImageToBase64: Invalid buffer')
		}
		return `data:${ contentType };base64,${ buffer.toString('base64') }`
	}
}
