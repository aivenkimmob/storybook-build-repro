import React from 'react';
import ButtonComponent from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { getFigmaFileLink } from '../../stories/utils';
import { FIGMA_FLAT_BUTTONS_NODE_ID } from '../../stories/figmaIds';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [withKnobs],
};

export const Button = () => (
  <ButtonComponent onClick={action('clicked')}>{text('Label', 'Hello Storybook')}</ButtonComponent>
);

Button.storyName = 'Button';
Button.parameters = {
  design: {
    type: 'figma',
    url: getFigmaFileLink(FIGMA_FLAT_BUTTONS_NODE_ID),
  },
};
