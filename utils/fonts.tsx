const FontFaceObserver = require('fontfaceobserver')

const loadFonts = async () => {
  const modernGothic = new FontFaceObserver('Modern Gothic', {
    weight: 300,
  })
  const modernGothicRegular = new FontFaceObserver('Modern Gothic', {
    weight: 'normal',
  })
  const sohneMono = new FontFaceObserver('So:hne Mono')
  return Promise.all([
    modernGothic.load(null, 10000),
    modernGothicRegular.load(null, 10000),
    sohneMono.load(null, 10000),
  ])
}

export default loadFonts
