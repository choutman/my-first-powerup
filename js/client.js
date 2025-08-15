const cardFromUrlCapability = (t, options) => {
  const url = options.url;

  console.log("Checking url", url);

  if (url.startsWith("https://www.funda.nl")) {
    console.log("fetching funda.nl");

    return {
        name: "Funda kaartje",
        desc: "This card was created from the URL for funda.nl",
        pos: "top"
      };
  }

  // Return null if no custom card content is provided
  return null;
};

TrelloPowerUp.initialize({
  'card-from-url': cardFromUrlCapability
});
