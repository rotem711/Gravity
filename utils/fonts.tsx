const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const modernGothic = new FontFaceObserver('Modern Gothic')

  modernGothic.load().then(() => {
    document.documentElement.classList.add('font-loaded')
  })
}

export default Fonts
