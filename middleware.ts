import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";


export async function middleware(request: NextRequest, response: NextResponse) {
    const client = createClient();
    const pathname = request.nextUrl.pathname;
    const profile = request.cookies.get("visitor_profile")?.value

    // Query all catogories
    const categories = (await client.getAllByType<prismic.Content.BlogCategoryDocument>(
        "blog_category",
    ).catch(e => {
        return null
    })) || [];

    // If user is on blog_article, set visitor_profile as article category.uid
    
    let categoryUid = null;

    // Check if the request URL matches a blog category
    for (const category of categories) {
        if (request.url.includes(`/blog/${category.uid}`)) {
            categoryUid = category.uid;
            break; // Stop the loop once a match is found
        }
    }

    const res = NextResponse.next();
    // Set the "visitor_profile" cookie with the category UID (if found)
    if (categoryUid !== null) {
        res.cookies.set("visitor_profile", categoryUid, {
        path: "/",
        });
        console.log("visitor_profile set to", categoryUid);
    }


    // Delete profile when accessing homepage
    if (pathname == ('/')) {
        const res = NextResponse.next();
        res.cookies.delete('visitor_profile')
        return res
    }

    // Display the matching variant of the landing page depending on the visitor's profile
    // Rewrite the variant path so it displays the original page URL slug

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
    }

    return res

}

// Match to these pages
export const config = {
    matcher: ['/', '/lp/get-certified', '/blog/marketing/(.*)', '/blog/development/(.*)', '/blog/design/(.*)']
}
