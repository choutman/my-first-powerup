const GRAY_ICON = "https://cdn.glitch.me/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png"

console.log("my-first-powerup", window.TrelloPowerUp);

window.TrelloPowerUp.initialize({
  'format-url': function (t, options) {
    // options.url has the url that we are being asked to format
    console.log("format-url");
    return {
      icon: GRAY_ICON, // don't use a colored icon here
      text: '👉 ' + options.url + ' 👈',
      subtext: 'This will show us some text.',
      image: {
        url: 'https://cdn.glitch.me/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png', // thumbnail url
        size: 'contain' // background-size value that could be 'contain', 'original' or 'cover'
      },
      actions: [{
        text: 'Download',
        callback: (t) => {
          // you can do things like t.popup etc.
          console.log('Action clicked');
        },
      }]
    };

    // if we don't actually have any valuable information about the url
    // we can let Trello know like so:
    // throw t.NotHandled();
  }
});