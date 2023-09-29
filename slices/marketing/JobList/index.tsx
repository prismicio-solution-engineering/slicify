import { Container } from "@/components/Container";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

// const jobOpenings = [
//   {
//     id: 1,
//     role: "Full-time designer",
//     href: "#",
//     description:
//       "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
//     salary: "$75,000 USD",
//     location: "San Francisco, CA",
//   },
//   {
//     id: 2,
//     role: "Laravel developer",
//     href: "#",
//     description:
//       "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
//     salary: "$125,000 USD",
//     location: "San Francisco, CA",
//   },
//   {
//     id: 3,
//     role: "React Native developer",
//     href: "#",
//     description:
//       "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
//     salary: "$105,000 USD",
//     location: "San Francisco, CA",
//   },
// ];

const async jobOpenings = () =>  {
  fetch("https://api.github.com/gists/5bb154469b98fa0d39bc8e03fd6f500a")
  .then(results => {
    return results.json();
  })
  .then(data => {
    return data.files["slicify-jobs.json"].content;
  });
}

// const jobOpenings = fetch("https://api.github.com/gists/5bb154469b98fa0d39bc8e03fd6f500a")
//   // .then(function (response) {
//   //   if (response.ok) return response.json();
//   //   return Promise.reject(response);
//   // })
//   .then(results => {
//     return results.json();
//   })
//   .then(data => {
//     return data.files["slicify-jobs.json"].content;
//   });
// console.log(jobOpenings)

/**
 * Props for `JobList`.
 */
export type JobListProps = SliceComponentProps<Content.JobListSlice>;

/**
 * Component for "JobList" Slices.
 */
const JobList = ({ slice }: JobListProps): JSX.Element => {
  return (
    <section id={slice.primary.anchor || undefined}>
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
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
            <PrismicNextImage
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              field={slice.primary.image}
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {/* {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Position</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href={opening.href}>
                        {opening.role}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Team</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                      {opening.salary}
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-light-black">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))} */}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <PrismicNextLink
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                field={slice.primary.link}
              >
                {slice.primary.link_text} <span aria-hidden="true">&rarr;</span>
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JobList;
