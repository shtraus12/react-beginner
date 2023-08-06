import { HeaderData } from '../../models'

interface Props {
  headerData: HeaderData
}

function Header({ headerData }: Props) {
  return (
    <div className="header">
      <div className="person">
        <img src={headerData.avatarPath} alt="avatar" />
        <div className="name-position">
          <div className="name">{headerData.fullName}</div>
          <div className="position">{headerData.position}</div>
        </div>
      </div>
      <div className="contact-information">
        {headerData.contactInformation.map((contact, index) => {
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
