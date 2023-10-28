import React from 'react'
import { CVData } from '../models'

interface TextBlockProps {
  body: string
}

function TextBlock({ body }: TextBlockProps) {
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
