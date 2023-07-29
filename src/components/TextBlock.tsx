import React from 'react'
import { CVData } from '../models'

interface Props {
  body: string
}

function TextBlock({ body }: Props) {
  return (
    <div className="text-block">
      <div
        className="block-body"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  )
}

export default TextBlock
