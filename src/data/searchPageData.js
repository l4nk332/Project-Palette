import React from 'react';

import SplitButton from '../components/SplitButton/SplitButton';
import TextField from '../components/TextField/TextField';
import Button from '../components/Button/Button';

const splitButtonProps = [
  {
    text: 'Info',
    isActive: true,
    handler: () => {},
  },
  {
    text: 'Url',
    isActive: false,
    handler: () => {},
  },
];

const formProps = [
  {
    content: <SplitButton splits={splitButtonProps} />,
  },
  {
    label: 'Username/Organization',
    content: <TextField placeholderText="l4nk332" />,
  },
  {
    label: 'Project Name',
    content: <TextField placeholderText="Project Palette" />,
  },
  {
    content: <Button>Analyze</Button>,
  },
];

export default formProps;
