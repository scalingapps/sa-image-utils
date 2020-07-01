# sa-image-utils
Image utilities

# Example
```javascript
var {
SaImageUtils 
} = require("sa-image-utils");
var saImageUtils = new SaImageUtils();
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png';

// get raw image info (this contains the buffer and contentType)
saImageUtils.getRawImageFromUrl(imageUrl)
.then((rawImageInfo) => {
	const { buffer, contentType } = rawImageInfo;
	
	console.info('typeof buffer', typeof buffer);
	console.info('buffer.length', buffer.length);
	console.info('contentType', contentType);
	
  // get base64 from raw iamge info
	const base64 = saImageUtils.rawImageToBase64(rawImageInfo);
	console.info('base64.length', base64.length);
});
```
