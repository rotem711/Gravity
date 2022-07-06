const FontFaceObserver = require('fontfaceobserver')

const loadFonts = async () => {
  const modernGothic = new FontFaceObserver('Modern Gothic')

  return modernGothic.load()
}

export default loadFonts
