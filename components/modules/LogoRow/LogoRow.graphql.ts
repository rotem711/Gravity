const LogoRowFragment = (t: string) => `
  fragment LogoRow on ${t}_LogoRow {
    fieldGroupName
    logoRow {
      logoRowHeadline
      logos {
        logo {
          ...Image
        }
        link
      }
    }
  }
`
export default LogoRowFragment
