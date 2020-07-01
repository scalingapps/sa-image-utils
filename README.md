# sa-image-utils
Image utilities

# Code base
TypeScript

# Main methods
getRawImageFromUrl (return the buffer and a string with the content-type extracted from the response header)
rawImageToBase64 (convert the buffer to base64 format, i.e. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAA...)

# Example Using from vanilla JS (node)
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

  // get base64 from raw image info
  const base64 = saImageUtils.rawImageToBase64(rawImageInfo);
  console.info('base64.length', base64.length);
});
```
