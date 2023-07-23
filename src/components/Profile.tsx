import React from 'react'
import { ICVData } from '../models'
import TextBlock from './TextBlock'

interface Props {
  cvData: ICVData
}

function Profile({ cvData }: Props) {
  return (
    <div className="text-block">
      <div className="block-header">Profile</div>
      {<TextBlock paragraphs={cvData.profile} />}
    </div>
  )
}

export default Profile
