const { SaImageUtils } = require('./lib/index')

const saImageUtils = new SaImageUtils()
//const imageUrl = 'https://media.npr.org/assets/img/2020/06/25/reflect---2020---nikkolas-sm--press-use-only_custom-e69861c02d0bdd02b7dd3358c6a4a097e0266a69-s1600-c85.jpg';
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'

process.on('uncaughtException', (error) => {
  console.log('uncaughtException', error)
})

saImageUtils.getRawImageFromUrl(imageUrl).then((rawImageInfo) => {
  const { buffer, contentType } = rawImageInfo

  console.debug('typeof buffer', typeof buffer)
  //console.debug('buffer', buffer);
  console.debug('buffer.length', buffer.length)

  console.debug('contentType', contentType)

  const base64 = saImageUtils.rawImageToBase64(rawImageInfo)
  console.debug('base64.length', base64.length)
  //console.debug('base64', base64);
})
