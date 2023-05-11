// Look for the skip intro button on the page
var skipIntroButton = ''
const observer = new MutationObserver(function (mutations) {
  skipIntroButton = document.querySelector('.button-primary.watch-video--skip-content-button')
  console.log({skipIntroButton})
  if (skipIntroButton !== null) {
  skipIntroButton.click()
  console.log('clicked!')
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



