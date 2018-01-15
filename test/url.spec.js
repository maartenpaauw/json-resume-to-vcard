import chai from 'chai'
import resume from './resume.json'
import Url from '../src/url'

chai.expect()

const expect = chai.expect
let url

describe('URL', () => {

  before(() => {
    url = new Url(resume)
  })

  it('should return a url array', () => {
    expect(url.urls()).to.be.deep.equal([{
      type: 'personal',
      uri: 'http://richardhendricks.example.com'
    }])
  })
})
