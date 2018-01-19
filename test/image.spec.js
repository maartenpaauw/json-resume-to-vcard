import chai from 'chai'

import resume from './resume.json'
import Image from '../src/image'

chai.expect()

const expect = chai.expect
let image

describe('IMAGE', () => {

  before(() => {
    image = new Image(resume)
  })

  it('should return a image array', (done) => {
    image.photos().then((res) => {
      expect(res).to.be.deep.equal([{
        type: 'home',
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBF' +
          'RyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQ' +
          'wPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU' +
          '/8AAEQgAUABQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQ' +
          'USITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3' +
          'eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB' +
          '8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkj' +
          'M1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmq' +
          'KjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8hooor+iD+YQo/Ci' +
          'igAo9a+h/wBmn9ku4+OOmXOvapqkmjeH4pjbxGCMPNcyAAttzwqjIGSDk5GODXsOuf8ABOPSHt2OkeM763mA4F7aJMp/75KYrwa+eYHDVX' +
          'RqT1W+jdvuPosPw/mOKoqvSp+69tUr/ez4Xor2T4qfsoePvhZDNeT2Met6RHlmvtLJkEa+roQGX3OCB6142DkZr1aGJo4qHPRkpLyPHxOF' +
          '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'
      }])
      done()
    }).catch((err) => {
      done(err)
    })
  })
})
