if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      //registration successful
      console.log('serviceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      //registration failed :(
      console.log('serviceWorker registration failed: ', err);
    });
  });
}
