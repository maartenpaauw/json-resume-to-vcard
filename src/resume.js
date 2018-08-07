export default class Resume {
  constructor (resume) {
    this.resume = resume
  }

  get basics () {
    return this.resume.basics
  }
}
