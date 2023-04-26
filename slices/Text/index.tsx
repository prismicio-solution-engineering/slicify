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

export default function Text({ slice }: TextProps) {


  return (
    <section>
      

      {/* Headings */}
      <div className="mx-auto mt-4 max-w-3xl font-display">
        <h2 className="text-3xl font-bold tracking-tight text-vibrant-blue">
          H2 Everything you need to get up and running
        </h2>
        <h3 className="text-2xl font-bold tracking-tight text-slate-600">
          H3 Everything you need to get up and running
        </h3>
      </div>

      
    </section>
  );
}
