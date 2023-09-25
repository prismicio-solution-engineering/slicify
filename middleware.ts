import { NextRequest, NextResponse } from "next/server";
import { GrowthBook } from '@growthbook/growthbook'


const COOKIE = 'visitor_profile';



export async function middleware(request: NextRequest) {

    // We only want to run the A/B test on the homepage
    const pathname = request.nextUrl.pathname;
    if (pathname !== "/lp/get-certified") {
        return NextResponse.next()
    }
    console.log({ pathname })

    // Get existing visitor cookie or create a new one
    let visitor_profile = request.cookies.get(COOKIE);

    // Check the request URL or any other criteria to determine if it's a marketing or developer article
    const isMarketingArticle = request.url.includes('/blog/marketing');
    const isDeveloperArticle = request.url.includes('/blog/development');

    // return NextResponse.next()

    const response = NextResponse.next()

    // Set the cookies
    if (isMarketingArticle) {
        // Set a marketing cookie
        response.cookies.set(COOKIE, 'marketer');
        console.log(JSON.stringify(request.cookies.get('visitor_profile')?.value))
    } else if (isDeveloperArticle) {
        // Set a developer cookie
        response.cookies.set(COOKIE, 'developer');
        console.log(JSON.stringify(COOKIE))
    }

    // Redirect to the matching variant of the landing page depending on the visitor's profile

    // return NextResponse.redirect(new URL("/", request.url))


}

// Match to these pages
export const config = {
    matcher: ['/lp/get-certified', '/blog/marketing/(.*)', '/blog/development/(.*)']
}
