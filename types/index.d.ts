export declare interface RawImageInfo {
	buffer: Buffer;
	contentType: string;
}

export declare interface SaImageUtilsInterface {
	getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo>;
	rawImageToBase64(imageInfo: RawImageInfo): string;
}
export declare class SaImageUtils implements SaImageUtilsInterface {
	getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo>;
	rawImageToBase64(imageInfo: RawImageInfo): string;
}