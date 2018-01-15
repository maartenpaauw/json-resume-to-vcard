import chai from 'chai'

import resume from './resume.json'
import Name from '../src/name'

chai.expect()

const expect = chai.expect
let name

describe('NAME', () => {

  before(() => {
    name = new Name(resume)
  })

  it('should return a name object', () => {
    expect(name.name()).to.be.deep.equal({
      familyName: 'Hendriks',
      givenName: 'Richard',
      middleName: '',
      prefix: '',
      suffix: ''
    })
  })

  it('should return a nickname array', () => {
    expect(name.nicknames()).to.be.deep.equal([{
      text: ''
    }])
  })

  it('should return a formatted name array', () => {
    expect(name.formattedNames()).to.be.deep.equal([{
      text: 'Richard Hendriks'
    }])
  })

  it('should return a filename', () => {
    expect(name.file()).to.be.equal('richard-hendriks.vcf')
  })
})
