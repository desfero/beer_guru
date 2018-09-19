import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import { cardType, Card, CardGroup, LinkCard } from './';
import { title, desc } from './index.const'

storiesOf('CardGroup', module)
  .addDecorator(withStorySource(
    `import { cardType, Card } from '@beer/layout';

<Card type={cardType}>
    <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
    <h2>Example text</h2>
    <p>Example desc</p>
</Card>`
  ))
  .add('Card/default', () => (
    <CardGroup>
      <Card
        type={cardType.default}
      >
        <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
    </CardGroup>
  ))
  .add('Card/lite', () => (
    <CardGroup>
      <Card
        type={cardType.lite}
      >
        <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
    </CardGroup>
  ));
