import "@/styles/globals.css";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import { repositoryName } from "@/prismicio";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect } from "react";

// const FEATURES_ENDPOINT = "https://cdn.growthbook.io/api/features/sdk-EF3AimdGxPcRSx4B";

// // Create a GrowthBook instance
// const growthbook = new GrowthBook({
//   apiHost: "https://cdn.growthbook.io",
//   clientKey: "sdk-EF3AimdGxPcRSx4B",
//  // Enable easier debugging during development
//  enableDevMode: true,
//  // Update the instance in realtime as features change in GrowthBook
//  subscribeToChanges: true,
//  // Only required for A/B testing
//  // Called every time a user is put into an experiment
//   trackingCallback: (experiment, result) => {
//     // TODO: Use your real analytics tracking system
//     console.log("Viewed Experiment", {
//       experimentId: experiment.key,
//       variationId: result.key,
//       result,
//     });
//   },
// });

export default function App({ Component, pageProps, router }: AppProps) {
  
  // useEffect(() => {
  //   // Load features asynchronously when the app renders from the GrowthBook API and initialize the SDK
  //   growthbook.loadFeatures();
  // }, []);
  
  // // Refresh features and targeting attributes on navigation
  // useEffect(() => {
  //   fetch(FEATURES_ENDPOINT)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       growthbook.setFeatures(json.features);
  //     });

  //     // Set user attributes for targeting (from cookie, auth system, etc.)
  //   growthbook.setAttributes({
  //     id: "123",
  //     loggedIn: true,
  //     deviceId: "abcdef123456",
  //     employee: true,
  //     company: "Slicify",
  //     country: "FR",
  //     browser: navigator.userAgent,
  //     url: router.pathname,
  //   });
  // }, [router.pathname]);

  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => <Link {...props} />}
    >
      {router.asPath !== "/slice-simulator" ? (
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
          {/* <GrowthBookProvider growthbook={growthbook}>
            <Component {...pageProps} />
          </GrowthBookProvider> */}
        </PrismicPreview>
      ) : (
        <Component {...pageProps} />
        // <GrowthBookProvider growthbook={growthbook}>
        //   <Component {...pageProps} />
        // </GrowthBookProvider>
      )}
    </PrismicProvider>
  );
}
