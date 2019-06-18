import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SelectField } from "./";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getItems = async inputText => {
  await sleep(500);

  return [
    { value: "apple" },
    { value: "pear" },
    { value: "orange" },
    { value: "grape" },
    { value: "banana" },
  ].filter(item => item.value.includes(inputText));
};

storiesOf("SelectField", module)
  .add("default", () => (
    <SelectField
      getItems={getItems}
      onChange={action("onChange")}
      label="Select fruit"
      placeholder="Fruits here..."
    />
  ))
  .add("with error", () => (
    <SelectField
      getItems={() => Promise.reject(new Error("Failed to load"))}
      onChange={action("onChange")}
      label="Select fruit"
      placeholder="Fruits here..."
    />
  ));
