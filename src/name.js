import slugify from 'slugify'
import { parseFullName } from 'parse-full-name'

import Resume from './resume'

export default class Name extends Resume {

  constructor (resume) {
    super(resume)
    this._name = this.basics.name
    this.parsed = parseFullName(this._name, 'all', 1)
  }

  name () {
    return {
      familyName: this.parsed.last,
      givenName: this.parsed.first,
      middleName: this.parsed.middle,
      prefix: this.parsed.title,
      suffix: this.parsed.suffix
    }
  }

  nicknames () {
    return [{
      text: this.parsed.nick
    }]
  }

  formattedNames () {
    return [{
      text: this._name
    }]
  }

  file () {
    return `${slugify(this._name).toLowerCase()}.vcf`
  }
}
