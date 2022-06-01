const Translation = [
  {
    EXAMPLE: {
      en_US: 'Example',
    },
  },
]

const translations = (lang): { [key: string]: string } => {
  const data = {}
  Translation.forEach((e) => {
    const key = Object.keys(e)[0]
    const value = Object.values(e)[0][lang]
    data[key] = value
  })
  return data
}

export default translations
