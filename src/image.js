import 'babel-polyfill'
import base64Img from 'base64-img'

import Resume from './resume'

export default class Image extends Resume {

  constructor (resume) {
    super(resume)
  }

  async photos () {
    return [{
      type: 'home',
      uri: await new Promise((resolve, reject) => {
        base64Img.requestBase64(this.basics.image, (err, res, body) => {
          !err ? resolve(body) : reject(err)
        })
      })
    }]
  }
}
