import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withThemes } from "storybook-styled-components";
import StoryRouter from "storybook-react-router";

import { theme } from "../src";

const themes = {
  Default: theme,
};

addDecorator(withKnobs);
addDecorator(withThemes(themes));
addDecorator(StoryRouter());
addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
const req = require.context("..", true, /stories\.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
