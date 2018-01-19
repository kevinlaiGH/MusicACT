import React from 'react'

import FormContactDetails from './FormContactDetails'
import FormMusicianProfile from './FormMusicianProfile'
import FormSocials from './FormSocials'
import FormMultimedia from './FormMultimedia'

require('../style/forms.css')

const MusicianForm = (props) => {


  return (
    <form className="form-musician">

      <FormContactDetails handleChange={props.handleChange}/>
      <FormMusicianProfile  handleChange={props.handleChange}
        handleImageUpload={ props.handleImageUpload } />
      <FormSocials handleChange={props.handleChange} />
      <FormMultimedia handleChange={props.handleChange} />
      <input type="submit"/>
    </form>
  )
}

export default MusicianForm;

/*
musicans data[]

  type,
  _id,
  dateJoined,
  emailLogin,
  password,
  contactDetails{
    email: String,
    phoneNumber: String,
    pointOfContact: String
  }
  profile{
    imageSrc: String,
    name: String,
    bio: Text
  }
  socialMedia{
    facebook: String,
    instagram: String,
    soundcloud: String,
    youtube: String,
    spotify: String,
    twitter: String,
    website: String
  }
  multimedia{
    soundcloudLink: String,
    youtubeLink: String
  }


*/
