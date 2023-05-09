import type { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import Image from "next/image";

// Tailwind imports
import { Container } from "@/components/Container";
import { QuoteIcon } from "@/components/QuoteIcon";
import avatarImage1 from "@/images/avatars/avatar-1.png";
import avatarImage2 from "@/images/avatars/avatar-2.png";
import avatarImage3 from "@/images/avatars/avatar-3.png";
import avatarImage4 from "@/images/avatars/avatar-4.png";
import avatarImage5 from "@/images/avatars/avatar-5.png";
import { PrismicNextImage } from "@prismicio/next";

const testimonials = [
  [
    {
      content:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      author: {
        name: "Sheryl Berge",
        role: "CEO at Lynch LLC",
        image: avatarImage1,
      },
    },
    {
      content:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      author: {
        name: "Leland Kiehn",
        role: "Founder of Kiehn and Sons",
        image: avatarImage5,
      },
    },
    {
      content:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      author: {
        name: "Erin Powlowski",
        role: "COO at Armstrong Inc",
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      author: {
        name: "Peter Renolds",
        role: "Founder of West Inc",
        image: avatarImage3,
      },
    },
    {
      content:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: avatarImage4,
      },
    },
  ],
];

export default function TestimonialsMasonry({
  slice,
}: {
  slice: Content.TestimonialsSliceDefault;
}) {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                  {children}
                </p>
              ),
            }}
          />
        </div>
        <ul
          className="mx-auto mt-16 max-w-2xl w-full lg:columns-3 sm:columns-2 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none"
          // className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >

          {slice?.items?.map((item, idx) => (
            <li
              key={idx}
              className="mb-8 md:w-96 sm:w-80 sm:space-x-4"
            >
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">

                <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                <blockquote className="relative">
                  <PrismicRichText
                    field={item.quote}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-lg tracking-tight text-slate-900">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6 text-left">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      <PrismicRichText
                        field={item.author}
                        components={{
                          paragraph: ({ children }) => <p>{children}</p>,
                        }}
                      />
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      <PrismicRichText
                        field={item.author_role}
                        components={{
                          paragraph: ({ children }) => <p>{children}</p>,
                        }}
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <PrismicNextImage
                      className="h-14 w-14 object-cover"
                      field={item.author_image}
                      width={56}
                      height={56}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
