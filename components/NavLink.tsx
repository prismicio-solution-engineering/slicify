import { PrismicLink } from "@prismicio/react";
import type * as prismicT from "@prismicio/types";
import { ReactNode } from "react";

export function NavLink({
  field,
  children,
}: {
  field: prismicT.LinkField;
  children: ReactNode;
}) {
  return (
    <PrismicLink
      field={field}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </PrismicLink>
  );
}
