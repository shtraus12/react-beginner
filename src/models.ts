export interface ICVData {
  avatarPath: string
  fullName: string
  position: string
  contactInformation: Array<contact>
  profile: Array<textParagraph>
  careers: Array<workingExperience>
}

interface contact {
  iconPath?: string
  title: string
  body: string
  bodyLink?: string
}

interface textParagraph {
  header?: string
  body: string
}

interface workingExperience {
  dates: string
  duration: string
  position: string
  onSiteRemote: string
  companyName: string
  description: Array<textParagraph>
}
