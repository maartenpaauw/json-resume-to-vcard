import chai from 'chai'

import resume from './resume.json'
import Summary from '../src/summary'

chai.expect()

const expect = chai.expect
let summary

describe('SUMMARY', () => {

  before(() => {
    summary = new Summary(resume)
  })

  it('should return a summary array', () => {
    expect(summary.notes()).to.be.deep.equal([{
      text: 'Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. ' +
        '(Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software ' +
        'developer. While his work focuses on applied information theory, mostly optimizing lossless compression ' +
        'schema of both the length-limited and adaptive variants, his non-work interests range widely, everything ' +
        'from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a ' +
        '“length-limited” conversation!'
    }])
  })
})
