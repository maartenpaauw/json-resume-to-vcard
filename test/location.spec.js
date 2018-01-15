import chai from 'chai'

import resume from './resume.json'
import Location from '../src/location'

chai.expect()

const expect = chai.expect
let location

describe('LOCATION', () => {

  before(() => {
    location = new Location(resume)
  })

  it('should return a location array', () => {
    expect(location.addresses()).to.be.deep.equal([{
      type: 'home',
      street: '2712 Broadway St',
      city: 'San Francisco',
      region: 'California',
      postalCode: 'CA 94115',
      country: 'US'
    }])
  })
})
