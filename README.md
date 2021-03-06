# sa-image-utils
Node image utilities

# code base
TypeScript

# main methods
getRawImageFromUrl (return the buffer and a string with the content-type extracted from the response header)
rawImageToBase64 (convert the buffer to base64 format, i.e. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAA...)

# # example using vanilla JS (node)
```javascript
var {
	saImageUtils 
} = require("sa-image-utils");
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png';

// get raw image info (this contains the buffer and contentType)
SaImageUtils.getRawImageFromUrl(imageUrl)
.then((rawImageInfo) => {
  const { buffer, contentType } = rawImageInfo;

  console.info('typeof buffer', typeof buffer);
  console.info('buffer.length', buffer.length);
  console.info('contentType', contentType);

  // get base64 from raw image info
  const base64 = SaImageUtils.rawImageToBase64(rawImageInfo);
  console.info('base64.length', base64.length);
});
```
