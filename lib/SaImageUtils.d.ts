/// <reference types="node" />
export interface RawImageInfo {
    buffer: Buffer;
    contentType: string;
}
export interface SaImageUtilsStatic {
    getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo>;
    rawImageToBase64(imageInfo: RawImageInfo): string;
}
export interface SaImageUtilsInterface {
}
export declare const SaImageUtils: SaImageUtilsStatic;
