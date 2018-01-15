import Resume from './resume'

export default class Profile extends Resume {

  constructor (resume) {
    super(resume)
  }

  socialProfiles () {
    return this.basics.profiles.map((profile) => {
      return {
        type: profile.network.toLowerCase(),
        user: profile.username.toLowerCase()
      }
    })
  }
}
