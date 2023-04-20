import { Button } from "@/components/Button";
import type { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { FormEvent } from "react";
import { TextField } from "@/components/Fields";

export type FormProps = SliceComponentProps<Content.FormSlice>;

export default function Form({ slice }: FormProps) {
  // Handles the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      email: form.email.value as string,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    if (response.status === 400) {
      alert(`Could not subscribe, please check your email: ${result.data}`);
    } else {
      alert(`You subscribed with this email address: ${result.data}`);
    }
  };

  return (
    <section>
      <div className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 items-center">
          <div className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
            <PrismicRichText
              field={slice.primary.description}
              components={{
                heading2: ({ children }) => (
                  <h2 className="inline sm:block lg:inline xl:block">
                    {children}
                  </h2>
                ),
                paragraph: ({ children }) => (
                  <p className="inline sm:block lg:inline xl:block">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md lg:col-span-5 lg:pt-2"
          >
            <div className="flex gap-x-4">
              <TextField
                id="email-address"
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                required
                labelSrOnly
                placeholder={
                  slice.primary.placeholder
                    ? slice.primary.placeholder
                    : undefined
                }
                className="flex-auto"
              />
              <Button variant="solid" color="slate" submit>
                {slice.primary.subscribe_label}
              </Button>
            </div>
            <PrismicRichText
              field={slice.primary.disclaimer}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-4 text-sm leading-6 text-gray-900">
                    {children}
                  </p>
                ),
                hyperlink: ({ children, node }) => (
                  <PrismicLink
                    field={node.data}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    {children}
                  </PrismicLink>
                ),
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
