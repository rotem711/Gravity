import { ImageComponent } from 'queries/fragments/Image'

const TeamGridFragment = (t: string) => `
  fragment TeamGrid on ${t}_TeamGrid {
    fieldGroupName
    teamGrid {
      topline
      bigCopy
      members {
        ${ImageComponent()}
        name
        position
        linkedUrl
      }
    }
  }
`
export default TeamGridFragment
