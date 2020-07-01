export declare interface SaImageUtilsInterface {
	getRawImageFromUrl(imageUrl: string): Promise<Buffer>;
}
export declare class ImageUtils implements SaImageUtilsInterface {
	getRawImageFromUrl(imageUrl: string): Promise<Buffer>;
}