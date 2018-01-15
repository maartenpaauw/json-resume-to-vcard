import Resume from './resume'

export default class Url extends Resume {

  constructor (resume) {
    super(resume)
  }

  urls () {
    return [{
      type: 'personal',
      uri: this.basics.url
    }]
  }
}
