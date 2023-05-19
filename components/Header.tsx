import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { HeaderDocumentData, HeaderLinkSlice } from "@/prismicio-types";
import { PrismicLink, PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices/navigation";
import { PrismicNextImage } from "@prismicio/next";

function MobileNavLink({ link, children }: { children: ReactNode, link: HeaderLinkSlice }) {
  switch (link.variation) {
    case "default":
      return (
        <Popover.Button>
          <PrismicLink field={link.primary.link}>
            {children}
          </PrismicLink>
        </Popover.Button>
      )
    case "button":
      return (
        <></>
      )
    case "samePageAnchor":
      return (
        <Popover.Button>
          <PrismicLink href={"#" + link.primary.anchor} >
            {children}
          </PrismicLink>
        </Popover.Button>
      )
  }
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation({ header }: { header: HeaderDocumentData }) {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {
              header.slices.map((link, index) => (
                <MobileNavLink link={link} key={index}>
                  <PrismicRichText field={link.primary.label} />
                </MobileNavLink>
              )
              )}
            <hr className="m-2 border-slate-300/40" />
            {
              header.slices1.map((link, index) => (
                <MobileNavLink link={link} key={index}>
                  <PrismicRichText field={link.primary.label} />
                </MobileNavLink>
              )
              )}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header(header: HeaderDocumentData) {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <PrismicNextImage field={header.logo} className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <SliceZone slices={header.slices} components={components} />
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <SliceZone slices={header.slices1} components={components} />
            <div className="-mr-1 md:hidden">
              <MobileNavigation header={header} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
