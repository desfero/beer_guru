import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import { Modal } from './';
import { title, desc } from './index.const'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal isOpen={boolean('isOpen', true)}>
      <header>
        <h3>{title}</h3>
        <p>{desc}</p>
      </header>
    </Modal>
  ));
