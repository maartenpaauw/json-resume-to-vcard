import chai from 'chai'
import resume from './resume.json'
import Work from '../src/work'

chai.expect()

const expect = chai.expect
let work

describe('WORK', () => {

  before(() => {
    work = new Work(resume)
  })

  it('should return a work array', () => {
    expect(work.works()).to.be.deep.equal([{
      organization: 'Pied Piper',
      title: 'CEO/President',
      role: 'Programmer'
    }])
  })
})
