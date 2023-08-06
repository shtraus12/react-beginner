import React, { ReactElement } from 'react'

interface ModalWindowProps {
  children: ReactElement
}

function ModalWindow({ children }: ModalWindowProps) {
  return <div className="modal-window-container">{children}</div>
}

export default ModalWindow
