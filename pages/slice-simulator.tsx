import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components as mktComponents } from "../slices/marketing";
import { components as blogComponents } from "../slices/blog";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <SliceZone
        slices={slices}
        components={{ ...mktComponents, ...blogComponents }}
      />
    )}
    state={{}}
  />
);

export default SliceSimulatorPage;
