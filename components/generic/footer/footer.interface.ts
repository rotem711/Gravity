import Link from 'interfaces/Link'

export default interface FooterInterface {
  contact: string
  navigation: [
    {
      label: string
      links: [
        {
          link: Link
        },
      ]
    },
  ]
}
