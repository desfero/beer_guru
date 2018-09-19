import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import { cardType, CardGroup, LinkCard } from './';
import { title, desc } from './index.const'

storiesOf('CardGroup', module)
  .addDecorator(withStorySource(
    `import { cardType, LinkCard } from '@beer/layout';

<LinkCard type={cardType}>
    <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
    <h2>Example text</h2>
    <p>Example desc</p>
</LinkCard>`
  ))
  .add('LinkCard/default', () => (
    <CardGroup>
      <LinkCard
        type={cardType.default}
        to={'Modal'}
      >
        <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
        <h2>{title}</h2>
        <p>{desc}</p>
      </LinkCard>
    </CardGroup>
  ))
  .add('LinkCard/lite', () => (
    <CardGroup>
      <LinkCard
        type={cardType.lite}
        to={'Modal'}
      >
        <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
        <h2>{title}</h2>
        <p>{desc}</p>
      </LinkCard>
    </CardGroup>
  ));
