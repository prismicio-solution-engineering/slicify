import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";


export async function middleware(request: NextRequest, response: NextResponse) {
    const client = createClient();


    const pathname = request.nextUrl.pathname;

    const cookie = request.cookies.get("visitor_profile")

    const profile = request.cookies.get("visitor_profile")?.value

    const res = NextResponse.next();

    // const categories = await client.getAllByType<prismic.Content.BlogCategoryDocument>(
    //     "blog_category",
    //   ).catch(e => {
    //     return null
    //   });

    //   console.log(categories)

    //   categories?.forEach((category) => {
    //     // Set marketer profile with cookie
    //     if (request.url.includes(`/blog/${category.uid}`)) {
    //         res.cookies.set('visitor_profile', `${category.uid}`);
    //         console.log("cookie set to", cookie, category.uid);
    //         return res
    //     }
    //   })

    // Set marketer profile with cookie
    if (request.url.includes('/blog/marketing')) {
        res.cookies.set('visitor_profile', 'marketer') //replace with the category name marketing
        console.log("Cookie set as", cookie)
        return res
    }

    // Set developer profile with cookie
    // if they visit a blog article from development category
    if (request.url.includes('/blog/development')) {
        res.cookies.set('visitor_profile', 'developer')
        console.log("Cookie set as", cookie)
        return res
    }

    // Uncomment for designers
    // Set designer profile with cookie
    if (request.url.includes('/blog/design')) {
        res.cookies.set('visitor_profile', 'designer')
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

    // GraphQuery
    const lpGraphQuery = `{
        landing_page{
            variants{
                variant {
                    ...on landing_page {
                        uid
                    }
                }
                bucket
            }
        }
    }`


    if (pathname == '/lp/get-certified') {
        console.log("Your profile is", profile)

        const page = await client.getByUID<prismic.Content.LandingPageDocument>(
            "landing_page",
            "get-certified",
            {
                graphQuery: lpGraphQuery,
            }
        ).catch(e => {
            return null
        });

        // console.log(page)

        let customPage = '';

        page?.data.variants.forEach((variant) => {
            if (profile == variant.bucket) {
                customPage = variant.variant.uid
            }

        })

        if (customPage !== '') {
            console.log(customPage)
            return NextResponse.rewrite(new URL(`/lp/${customPage}`, request.url))

        }

        // if (profile == 'marketer') {
        //     return NextResponse.rewrite(new URL('/lp/get-certified-marketers', request.url))
        // }
        // if (profile == 'developer') {
        //     return NextResponse.rewrite(new URL('/lp/get-certified-developers', request.url))
        // }

    }


}

// Match to these pages
export const config = {
    matcher: ['/', '/lp/get-certified', '/blog/marketing/(.*)', '/blog/development/(.*)', '/blog/design/(.*)']
}
