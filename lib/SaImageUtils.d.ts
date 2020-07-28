/// <reference types="node" />
export interface RawImageInfo {
    buffer: Buffer;
    contentType: string;
}
export interface SaImageUtilsInterface {
    getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo>;
    rawImageToBase64(imageInfo: RawImageInfo): string;
}
export declare class SaImageUtils implements SaImageUtilsInterface {
    private getMessageFromException;
    getRawImageFromUrl(imageUrl: string): Promise<RawImageInfo>;
    rawImageToBase64(imageInfo: RawImageInfo): string;
}
