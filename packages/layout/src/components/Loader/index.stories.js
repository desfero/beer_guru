import React from 'react';
import {storiesOf} from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource'

import { BigLoader, Loader, LOADER_SIZE } from './';

storiesOf('Loader', module)
  .addDecorator(withStorySource(
    `import { Loader, LOADER_SIZE } from '@beer/layout';

<Loader size={LOADER_SIZE} />`
  ))
  .add('small', () => (
    <Loader
      size={LOADER_SIZE.small}
    />
  ))
  .add('big', () => (
    <BigLoader
      size={LOADER_SIZE.big}
    />
  ));
