import React from 'react'
import ModalWindow from '../ModalWindow'

interface InfoModalWindowProps {
  onSubmit: () => void
  headerText: string
  body: string
}

function InfoModalWindow({ onSubmit, headerText, body }: InfoModalWindowProps) {
  return (
    <ModalWindow>
      <form className="modal-window" onSubmit={event}>
        <div className="header">{headerText}</div>
        <div className="body">{body}</div>
        <div className="footer">
          <button>Close modal</button>
        </div>
      </form>
    </ModalWindow>
  )
}

export default InfoModalWindow
