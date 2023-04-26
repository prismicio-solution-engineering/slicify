import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";
import { components as navComponents } from "../slices/navigation";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <SliceZone slices={slices} components={{...components, ...navComponents}} />
    )}
    state={{}}
  />
);

export default SliceSimulatorPage;
