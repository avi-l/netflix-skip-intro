var skipIntroButton = ''
const observer = new MutationObserver(function (mutations) {
  skipIntroButton = document.querySelector('.button-primary.watch-video--skip-content-button')
  if (skipIntroButton !== null) {
    skipIntroButton.click()
    observer.disconnect();
  }
}) 
observer.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
})



