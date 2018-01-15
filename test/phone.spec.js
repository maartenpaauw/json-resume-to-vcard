import chai from 'chai'
import resume from './resume.json'
import Phone from '../src/phone'

chai.expect()

const expect = chai.expect
let phone

describe('PHONE', () => {

  before(() => {
    phone = new Phone(resume)
  })

  it('should return a phone array', () => {
    expect(phone.phones()).to.be.deep.equal([{
      type: 'home',
      text: '(912) 555-4321'
    }])
  })
})
