import Resume from './resume'

export default class Email extends Resume {

  constructor (resume) {
    super(resume)
  }

  emails () {
    return [{
      type: 'home',
      text: this.basics.email
    }]
  }
}
