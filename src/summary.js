import Resume from './resume'

export default class Summary extends Resume {

  constructor (resume) {
    super(resume)
  }

  notes () {
    return [{
      text: this.basics.summary
    }]
  }
}
