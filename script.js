function send(method) {
  switch (method) {
    case "page":
      analytics.page("Product Viewed");
      break;
    case "track":
      analytics.track("Added to Cart", {
        sampleProperty: true
      });
      break;
    case "identify":
      analytics.identify("ejwalters", {
        sampleTrait: true
      });
      break;
    case "group":
      analytics.group("Platinum", {
        sampleGroupTrait: true
      });
      break;
    default:
      alert("Method not supported")
  }
}
