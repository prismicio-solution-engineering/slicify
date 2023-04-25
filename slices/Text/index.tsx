import type { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { QuoteIcon } from "@/components/QuoteIcon";

import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import { useEffect } from "react";

export type TextProps = SliceComponentProps<Content.TextSlice>;

function TextWithStickyImage() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-vibrant-blue">
                Deploy faster
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate sm:text-4xl">
                A better workflow
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate">
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate">
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextSimple() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="mt-10">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-700">
            <li className="list-disc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </li>
            <li className="list-disc">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </li>
            <li className="list-disc">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </li>
          </ul>
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate">
            From beginner to expert in 3 hours
          </h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
            mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
            Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
            diam.
          </p>
          <figure className="mt-10 border-l-4 border-l-light-blue pl-9">
            <blockquote className=" text-slate">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
                purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
                aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                enim tristique.”
              </p>
            </blockquote>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm font-display leading-6 text-light-blue">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-light-blue"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate">
            Everything you need to get up and running
          </h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
            varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
            cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
            molestie. Gravida quis fringilla amet eget dui tempor dignissim.
            Facilisis auctor venenatis varius nunc, congue erat ac. Cras
            fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Text({ slice }: TextProps) {

  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <section>
      <TextWithStickyImage />
      <TextSimple />
      {/* List with icons */}
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p>List with icons</p>
        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <li className="flex gap-x-3">
            <CloudArrowUpIcon
              className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-slate">
                Push to deploy.
              </strong>{" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </span>
          </li>
          <li className="flex gap-x-3">
            <LockClosedIcon
              className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-slate">
                SSL certificates.
              </strong>{" "}
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </span>
          </li>
          <li className="flex gap-x-3">
            <ServerIcon
              className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-slate">
                Database backups.
              </strong>{" "}
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </span>
          </li>
        </ul>
      </div>
      {/* Headings */}
      <div className="mx-auto mt-4 max-w-3xl font-display">
        <h2 className="text-3xl font-bold tracking-tight text-vibrant-blue">
          H2 Everything you need to get up and running
        </h2>
        <h3 className="text-2xl font-bold tracking-tight text-slate-600">
          H3 Everything you need to get up and running
        </h3>
      </div>
      {/* Quote */}
      <div className="mx-auto relative max-w-3xl text-base leading-7 text-gray-700">
        <QuoteIcon className="absolute left-3 top-0 fill-slate-100" />
        <figure className="mt-10 relative border-l-4 border-l-vibrant-blue px-9">
          <blockquote className="font-semibold text-slate">
            <p>
              “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
              purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
              aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
              tristique.”
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4 items-center">
            <img
              className="h-14 w-14 object-cover flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <p className="font-semibold text-base font-display text-slate-900">
                Maria Hill
              </p>
              <p className="text-sm text-slate-500">Marketing Manager</p>
            </div>
          </figcaption>
        </figure>
      </div>
      {/* Image with or without caption */}
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-contain"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-light-blue">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-light-blue"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
      </div>
      {/* Youtube video (Embed) */}
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-light-blue">
            <PlayCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-light-blue"
              aria-hidden="true"
            />
            Youtube Video
          </figcaption>
        </figure>
      </div>
      {/* Text Two Columns */}
      {/* Highlight */}
      <div className="px-9 py-6 my-10 mx-auto max-w-3xl text-base bg-indigo-50 shadow-md">
        <strong className="font-display text-lg text-vibrant-blue">
          Highlight
        </strong>
        <p className="rounded-md text-slate">
          <br /> Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
          purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
          aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
          tristique.
        </p>
      </div>
      {/* Code Block */}
      <div className="my-10 mx-auto max-w-3xl">
        <pre className="p-6 bg-[#0d1117] rounded-xl shadow-lg">
          <code className="whitespace-pre-wrap">{`
useEffect(() => {
  hljs.initHighlighting();
}, []); 

// useEffect(() => {
//   hljs.highlightAll();
// });

<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-700">
  <li className="list-disc">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
    impedit perferendis suscipit eaque, iste dolor cupiditate
    blanditiis ratione.
  </li>
  <li className="list-disc">
    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    lorem cupidatat commodo.
  </li>
  <li className="list-disc">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
    magna sit morbi lobortis.
  </li>
</ul>
          `}</code>
        </pre>
      </div>
    </section>
  );
}
