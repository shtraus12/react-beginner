export interface ICVData {
  avatarPath: string
  fullName: string
  position: string
  contactInformation: Array<contact>
  profile: string
  careers: Array<workingExperience>
  projectsHighlights: Array<project>
}

interface contact {
  iconPath?: string
  title: string
  body: string
  bodyLink?: string
}

interface workingExperience {
  dates: string
  duration: string
  position: string
  onSiteRemote: string
  companyName: string
  description: string
}

interface project {
  title: string
  dates: string
  duration: string
  description: string
}
