const cardFromUrlCapability = (t, options) => {
  const url = options.url;

  console.log("Checking url", url);

  if (url.startsWith("https://www.funda.nl")) {
    console.log("fetching funda.nl");

    return fetch(url, { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log("fetched html from funda", data);
        return {
         name: "Funda kaartje",
         desc: "This card was created from the URL for funda.nl",
         pos: "top"
       };
      })
      .catch(error => {
        console.error('Fetch error:', error);
        return t.alert({ message: 'Failed to fetch data.', display: 'error', duration: 5 });
      });

  }

  // Return null if no custom card content is provided
  return null;
};

TrelloPowerUp.initialize({
  'card-from-url': cardFromUrlCapability
});
