import vcard from 'vcard-generator'
import fs from 'fs'

import Name from './name'
import Work from './work'
import Email from './email'
import Phone from './phone'
import Location from './location'
import Profile from './profile'
import Url from './url'
import Image from './image'
import Summary from './summary'

export default class Vcard {

  constructor (resume, additions = {}) {
    this.resume = resume
    this.additions = additions

    this.name = new Name(this.resume)
    this.work = new Work(this.resume)
    this.email = new Email(this.resume)
    this.phone = new Phone(this.resume)
    this.location = new Location(this.resume)
    this.profile = new Profile(this.resume)
    this.url = new Url(this.resume)
    this.image = new Image(this.resume)
    this.summary = new Summary(this.resume)
  }

  async fields () {
    return {
      name: this.name.name(),
      formattedNames: this.name.formattedNames(),
      nicknames: this.name.nicknames(),
      works: this.work.works(),
      emails: this.email.emails(),
      phones: this.phone.phones(),
      addresses: this.location.addresses(),
      socialProfiles: this.profile.socialProfiles(),
      urls: this.url.urls(),
      photos: await this.image.photos(),
      notes: this.summary.notes(),
      ...this.additions
    }
  }

  async generate () {
    return await vcard.generate(await this.fields())
  }

  async toString () {
    return await this.generate()
  }

  toFile (path = './') {
    this.generate().then((res) => {
      fs.writeFileSync(`${path}${this.name.file()}`, res)
    })
  }
}
