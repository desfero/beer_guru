import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { withStorySource } from '@storybook/addon-storysource';

import { Modal } from './';
import { title, desc } from './index.const'

storiesOf('Modal', module)
  .addDecorator(withStorySource(
    `import { Modal } from '@beer/layout';

const modalProps = getModalProps(props);

<Modal isOpen {...modalProps}>
    <header>
        <h3>Example title</h3>
        <p>Example description</p>
    </header>
</Modal>`
  ))
  .add('default', () => (
    <Modal isOpen={boolean('isOpen', false)}>
      <header>
        <h3>{title}</h3>
        <p>{desc}</p>
      </header>
    </Modal>
  ));
