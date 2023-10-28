import React from 'react'
import { ProfileData } from '../../models'
import TextBlock from '../TextBlock'

interface ProfileProps {
  profile: ProfileData
}

function Profile({ profile }: ProfileProps) {
  return (
    <div className="text-block">
      <TextBlock body={profile.description} />
    </div>
  )
}

export default Profile
