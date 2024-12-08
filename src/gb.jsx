import {GrowthBook} from "@growthbook/growthbook-react";

const growthbook = new GrowthBook({
  apiHost:"https://cdn.growthbook.io",
  clientKey: "sdk-4SGlep1OnUji40M",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    console.log("view experiment", {
      experimentId: experiment.key,
      variationId: result.key
    });
  }
});

export default growthbook;