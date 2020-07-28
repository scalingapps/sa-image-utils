"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaImageUtils = void 0;
const tslib_1 = require("tslib");
const http_1 = tslib_1.__importDefault(require("http"));
const https_1 = tslib_1.__importDefault(require("https"));
class SaImageUtils {
    getMessageFromException(e) {
        if (!e) {
            return "unknown exception";
        }
        return (e.stack ? e.stack.split("\n") : e).toString();
    }
    getRawImageFromUrl(imageUrl) {
        return new Promise((resolve, reject) => {
            if ((imageUrl || "").trim().length === 0 ||
                typeof imageUrl !== "string") {
                reject("SaImageUtils: Error: invalid parameter imageUrl");
            }
            else {
                try {
                    // perform get request and read image into buffer
                    let client = http_1.default;
                    // if starts with https, use https client
                    if (imageUrl.indexOf("https") === 0) {
                        client = https_1.default;
                    }
                    client.get(imageUrl, (res) => {
                        if (res.statusCode !== 200) {
                            const errMsg = `getRawImageFromUrl: Error: statusCode is ${res.statusCode}`;
                            reject(errMsg);
                        }
                        else {
                            const contentType = res.headers["content-type"];
                            let bufArray = [];
                            res.on("data", (chunk) => {
                                bufArray.push(chunk);
                            });
                            res.on("end", () => {
                                if (bufArray.length > 0) {
                                    // if not empty, concat buffer
                                    const buffer = Buffer.concat(bufArray);
                                    // return buffer to caller
                                    resolve({
                                        buffer: buffer,
                                        contentType: contentType,
                                    });
                                }
                                else {
                                    const errMsg = `getRawImageFromUrl: Error: Empty Buffer`;
                                    reject(errMsg);
                                }
                            });
                        }
                    });
                }
                catch (e) {
                    reject(this.getMessageFromException(e));
                }
            }
        });
    }
    rawImageToBase64(imageInfo) {
        const { contentType, buffer } = imageInfo;
        if (!contentType) {
            throw Error("rawImageToBase64: Invalid contentType");
        }
        if (!buffer || buffer.length === 0) {
            throw Error("rawImageToBase64: Invalid buffer");
        }
        return `data:${contentType};base64,${buffer.toString("base64")}`;
    }
}
exports.SaImageUtils = SaImageUtils;
