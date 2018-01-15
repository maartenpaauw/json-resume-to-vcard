import Resume from './resume'

export default class Work extends Resume {

  constructor (resume) {
    super(resume)
    this.work = this.resume.work[0]
  }

  works () {
    return [{
      organization: this.work.name,
      title: this.work.position,
      role: this.basics.label
    }]
  }
}
