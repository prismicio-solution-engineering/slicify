import type { Content } from "@prismicio/client";
import Image from "next/image";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { asText } from "@prismicio/helpers";

// Tailwind imports
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";
import screenshot from "@/images/screenshots/payroll.png"

export default function CtaWithImage({
  slice,
  imageRight = true,
}: {
  slice:
    | Content.CallToActionSliceWithImageRight
    | Content.CallToActionSliceWithImageLeft;
  imageRight: boolean;
}) {
  return (
    <section
      id="get-started-today"
      className={`relative overflow-hidden ${
        imageRight && "bg-blue-600"
      } pt-16`}
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <div className="mt-10 flex justify-start gap-x-6">
            <Button href="/register" color="white">Get 6 months free</Button>
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              variant="outline"
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-dark-blue group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3 text-white">Watch video</span>
            </Button>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src={screenshot}
            alt="App screenshot"
            width={1824}
            height={1080}
            unoptimized
          />
        </div>
      </Container>
    </section>
  );
}
