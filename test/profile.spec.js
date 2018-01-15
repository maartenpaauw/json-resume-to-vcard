import chai from 'chai'
import resume from './resume.json'
import Profile from '../src/profile'

chai.expect()

const expect = chai.expect
let profile

describe('PROFILE', () => {

  before(() => {
    profile = new Profile(resume)
  })

  it('should return a profile array', () => {
    expect(profile.socialProfiles()).to.be.deep.equal([
      {
        'type': 'twitter',
        'user': 'neutralthoughts'
      },
      {
        'type': 'soundcloud',
        'user': 'dandymusicnl'
      }
    ])
  })
})
