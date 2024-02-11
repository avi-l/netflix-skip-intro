var skipIntroButton = '';

const observer = new MutationObserver(function (mutations) {
  // Look for skip buttons with different class names or attributes
  skipIntroButton = document.querySelector(
    '.button-primary.watch-video--skip-content-button, [dataUia="player-skip-content"], [dataUia="player-skip-recap"], [dataUia="player-skip-intro"]'
  );
  if (skipIntroButton !== null) {
    skipIntroButton.click();
    observer.disconnect();
  }
});

// Immediately start observing for changes in the DOM
observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
