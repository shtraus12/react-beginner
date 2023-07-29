import React from 'react'
import { ProfileData } from '../models'
import TextBlock from './TextBlock'

interface Props {
  profile: ProfileData
}

function Profile({ profile }: Props) {
  return (
    <div className="text-block">
      <div className="block-header">Profile</div>
      {<TextBlock body={profile.description} />}
    </div>
  )
}

export default Profile
