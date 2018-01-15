import Resume from './resume'

export default class Phone extends Resume {

  constructor (resume) {
    super(resume)
  }

  phones () {
    return [{
      type: 'home',
      text: this.basics.phone
    }]
  }
}
