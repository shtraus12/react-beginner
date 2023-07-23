import React from 'react'
import { ICVData } from '../models'

interface Props {
  paragraphs: Array<{
    header?: string
    body: string
  }>
}

function TextBlock({ paragraphs }: Props) {
  return (
    <div className="block-body">
      {paragraphs.map((paragraph) => {
        return (
          <div className="paragraph">
            {paragraph.header && (
              <div className="paragraph-header">{paragraph.header}</div>
            )}
            <div className="paragraph-body"> {paragraph.body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TextBlock
