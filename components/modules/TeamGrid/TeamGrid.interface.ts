import Image from 'interfaces/Image'

export default interface ITeamGrid {
  fieldGroupName?: string
  teamGrid: {
    topline: string
    bigCopy: string
    members: {
      image: Image
      name: string
      position: string
      linkedUrl: string
    }[]
  }
}
