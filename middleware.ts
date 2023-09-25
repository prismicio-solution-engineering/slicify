import { NextRequest, NextResponse } from "next/server";
import { GrowthBook } from '@growthbook/growthbook'

const FEATURES_ENDPOINT = 'https://cdn.growthbook.io/api/features/sdk-EF3AimdGxPcRSx4B';

const COOKIE = 'visitor_profile';

// Fetch features from GrowthBook API and cache in memory
let features = null;
let lastFetch = 0;
async function getFeatures() {
    if (Date.now() - lastFetch > 5000) {
        lastFetch = Date.now();
        const latest = fetch(FEATURES_ENDPOINT)
            .then(res => res.json())
            .then(json => features = json.features || features)
            .catch((e) => console.error("Error fetching features", e))
        // If this is the first time, wait for the initial fetch
        if (!features) await latest;
    }
    return features || {};
}



export async function middleware(request: NextRequest) {

    // We only want to run the A/B test on the homepage
    const pathname = request.nextUrl.pathname;
    if (pathname !== "/lp/get-certified") {
        return NextResponse.next()
    }
    console.log({ pathname })

    // Get existing visitor cookie or create a new one
    let visitor_profile = request.cookies.get(COOKIE);

    // Create a GrowthBook client instance
    const growthbook = new GrowthBook({
        attributes: { id: visitor_profile },
        features: await getFeatures(),
        trackingCallback: (exp, res) => {
            console.log("In Experiment", exp.key, res.variationId);
        }
    });


    // Pick which lp to render depending on a feature flag
    let res = NextResponse.next();

    if (growthbook.isOn("marketers_message")) {
        console.log("Feature is enabled!")

        // const url = req.nextUrl.clone();
        // url.pathname = "/lp/get-certified-marketers";
        // res = NextResponse.rewrite(url);
    } else if (growthbook.isOn("developers_message")) {
        console.log("Feature is enabled!")

        // const url = req.nextUrl.clone();
        // url.pathname = "/lp/get-certified-developers";
        // res = NextResponse.rewrite(url);
    }

    // Store the visitor cookie if not already there
    if (!request.cookies[COOKIE]) {
        res.cookie(COOKIE, visitor_profile)
    }

    return res

    // // Check the request URL or any other criteria to determine if it's a marketing or developer article
    // const isMarketingArticle = request.url.includes('/blog/marketing');
    // const isDeveloperArticle = request.url.includes('/blog/development');

    // // return NextResponse.next()

    // const response = NextResponse.next()

    // // Set the cookies
    // if (isMarketingArticle) {
    //     // Set a marketing cookie
    //     response.cookies.set(COOKIE, 'marketer');
    //     console.log(JSON.stringify(request.cookies.get('visitor_profile')?.value))
    // } else if (isDeveloperArticle) {
    //     // Set a developer cookie
    //     response.cookies.set(COOKIE, 'developer');
    //     console.log(JSON.stringify(COOKIE))
    // }

    // // Redirect to the matching variant of the landing page depending on the visitor's profile

    // // return NextResponse.redirect(new URL("/", request.url))


}

// Match to these pages
export const config = {
    matcher: ['/lp/get-certified', '/blog/marketing/(.*)', '/blog/development/(.*)']
}
