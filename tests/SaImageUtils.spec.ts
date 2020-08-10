import { expect } from 'chai'
import { SaImageUtils, RawImageInfo } from '../src'

describe('SaImageUtils', () => {
  it('should return raw image info from a url', (done) => {
    const imageUrl =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'

    SaImageUtils.getRawImageFromUrl(imageUrl).then(
      (rawImageInfo: RawImageInfo) => {
        const { buffer, contentType } = rawImageInfo

        //console.debug('typeof buffer', typeof buffer)
        //console.debug('buffer.length', buffer.length)
        //console.debug('contentType', contentType)

        const base64 = SaImageUtils.rawImageToBase64(rawImageInfo)
        //console.debug('base64.length', base64.length)

        expect(typeof buffer).to.equal('object')
        expect(buffer.length).to.equal(8221)
        expect(contentType).to.equal('image/png')
        expect(base64.length).to.equal(10986)
        done()
      }
    )
  })
})
