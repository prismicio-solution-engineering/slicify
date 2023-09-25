import { NextRequest, NextResponse } from "next/server";
import { GrowthBook } from '@growthbook/growthbook'


export async function middleware(request: NextRequest, response: NextResponse) {

    const pathname = request.nextUrl.pathname;

    const cookie = request.cookies.get("visitor_profile")

    const profile = request.cookies.get("visitor_profile")?.value

    const res = NextResponse.next();

    // Set marketer profile with cookie
    if (request.url.includes('/blog/marketing')) {
        res.cookies.set('visitor_profile', 'marketer')
        console.log("Cookie set as", cookie)
        return res
    }

    // Set developer profile with cookie
    if (request.url.includes('/blog/development')) {
        res.cookies.set('visitor_profile', 'developer')
        console.log("Cookie set as", cookie)
        return res
    }

    // Delete profile when accessing homepage
    if (pathname == ('/')) {
        res.cookies.delete('visitor_profile')
        console.log("Profile deleted", cookie)
        return res
    }

    // Display the matching variant of the landing page depending on the visitor's profile
    // Rewrite the variant path so it displays the original page URL slug

    if (pathname == '/lp/get-certified') {
        console.log("Your profile is", profile)
        if (profile == 'marketer') {
            return NextResponse.rewrite(new URL('/lp/get-certified-marketers', request.url))
        }
        if (profile == 'developer') {
            return NextResponse.rewrite(new URL('/lp/get-certified-developers', request.url))
        }
        
    }


}

// Match to these pages
export const config = {
    matcher: ['/', '/lp/get-certified', '/blog/marketing/(.*)', '/blog/development/(.*)']
}
