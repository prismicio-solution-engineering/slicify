import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components as mktComponents } from "../slices/marketing";
import { components as navComponents } from "../slices/navigation";
import { components as blogComponents } from "../slices/blog";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <SliceZone
        slices={slices}
        components={{ ...mktComponents, ...navComponents, ...blogComponents }}
      />
    )}
    state={{}}
  />
);

export default SliceSimulatorPage;
