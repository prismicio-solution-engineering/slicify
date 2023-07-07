import { SliceSimulator } from '@slicemachine/adapter-next/simulator'
import { SliceZone } from "@prismicio/react";

import { components as mktComponents } from "../slices/marketing";
import { components as blogComponents } from "../slices/blog";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={(props) => (
      <SliceZone
        {...props}
        components={{ ...mktComponents, ...blogComponents }}
      />
    )}
  />
);

export default SliceSimulatorPage;
