import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(withKnobs);
addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
const req = require.context("..", true, /stories\.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
