import Resume from './resume'

export default class Location extends Resume {

  constructor (resume) {
    super(resume)
    this.location = this.basics.location
  }

  addresses () {
    return [{
      type: 'home',
      street: this.location.address,
      city: this.location.city,
      region: this.location.region,
      postalCode: this.location.postalCode,
      country: this.location.countryCode
    }]
  }
}
