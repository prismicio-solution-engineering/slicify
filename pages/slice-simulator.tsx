import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components as mktComponents} from "../slices/marketing";
import { components as navComponents } from "../slices/navigation";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <SliceZone slices={slices} components={{...mktComponents, ...navComponents}} />
    )}
    state={{}}
  />
);

export default SliceSimulatorPage;
