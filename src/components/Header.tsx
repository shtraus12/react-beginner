import { ICVData } from '../models'

interface props {
  cvData: ICVData
}

function Header({ cvData }: props) {
  return (
    <div className="header">
      <div className="person">
        <img src={cvData.avatarPath} alt="avatar" />
        <div className="name-position">
          <div className="name">{cvData.fullName}</div>
          <div className="position">{cvData.position}</div>
        </div>
      </div>
      <div className="contact-information">
        {cvData.contactInformation.map((contact, index) => {
          return (
            <div className="contact" key={`contact ${index}`}>
              {contact.iconPath && <img src={contact.iconPath} alt="" />}
              <div>
                {`${contact.title}: `}
                {contact.bodyLink ? (
                  <a href={contact.bodyLink}>{contact.body}</a>
                ) : (
                  contact.body
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Header
