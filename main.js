/**
 * Listen for the app being launched, creates a window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('html/build/index.html', {
    'width': 800,
    'height': 600
  });
});
