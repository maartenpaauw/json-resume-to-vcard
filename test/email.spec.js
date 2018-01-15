import chai from 'chai'
import resume from './resume.json'
import Email from '../src/email'

chai.expect()

const expect = chai.expect
let email

describe('EMAIL', () => {

  before(() => {
    email = new Email(resume)
  })

  it('should return an email array', () => {
    expect(email.emails()).to.be.deep.equal([{
      'text': 'richard.hendriks@mail.com',
      'type': 'home'
    }])
  })
})
