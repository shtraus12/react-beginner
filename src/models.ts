export interface CVData {
  headerData: HeaderData
  profile: ProfileData
  careers: CareersData
  projectsHighlights: ProjectsData
  educations: EducationsData
  languages: LanguagesData
}

export interface HeaderData {
  avatarPath: string
  fullName: string
  position: string
  contactInformation: Array<Contact>
}

type Contact = {
  iconPath?: string
  title: string
  body: string
  bodyLink?: string
}

export interface ProfileData {
  description: string
}

export interface CareersData extends Array<workingExperience> {}

type workingExperience = {
  dates: string
  duration: string
  position: string
  onSiteRemote: string
  companyName: string
  description: string
}

export interface ProjectsData extends Array<project> {}

interface project {
  title: string
  dates: string
  duration: string
  description: string
}

export interface EducationsData extends Array<education> {}

type education = {
  dates: string
  schoolName: string
  description: string
}

export interface LanguagesData extends Array<language> {}

type language = {
  languageName: string
  level: string
}
