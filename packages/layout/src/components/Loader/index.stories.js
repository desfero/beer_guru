import React from "react";
import { storiesOf } from "@storybook/react";

import { BigLoader, Loader, LOADER_SIZE } from "./";

storiesOf("Loader", module)
  .add("small", () => <Loader size={LOADER_SIZE.small} />)
  .add("big", () => <BigLoader size={LOADER_SIZE.big} />);
