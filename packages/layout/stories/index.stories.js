import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  cardType, theme,
  BigLoader, Card, CardGroup, LinkCard, Loader, Modal,
  LOADER_SIZE
} from '../src';

import { title, desc, elements } from './index.const'


storiesOf('Modal', module)
  .add('open', () => (
    <Modal isOpen={true} theme={theme}>
      <header>
        <h3>{title}</h3>
        <p>{desc}</p>
      </header>
    </Modal>
  ));

storiesOf('Card', module)
  .add('default', () => (
    <Card
      theme={theme}
      type={cardType.default}
    >
      <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Card>
  ))
  .add('lite', () => (
    <Card
      theme={theme}
      type={cardType.lite}
    >
      <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Card>
  ));

storiesOf('CardGroup', module)
  .add('default', () => (
    <CardGroup>
      {
        elements.map((e, i) => (
          <Card
            theme={theme}
            type={cardType.default}
            key={i}
          >
            <img src="https://images.punkapi.com/v2/7.png" height="100" alt="Example image"/>
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
          </Card>
        ))
      }
    </CardGroup>
  ));

storiesOf('LinkCard', module)
  .add('default', () => (
    <LinkCard
      theme={theme}
      type={cardType.lite}
    >
      Go to modal
    </LinkCard>
  ));

storiesOf('Loader', module)
  .add('default', () => (
    <Loader
      size={LOADER_SIZE.small}
      theme={theme}
    />
  ))
  .add('bigLoader', () => (
    <BigLoader
      size={LOADER_SIZE.big}
      theme={theme}
    />
  ));
