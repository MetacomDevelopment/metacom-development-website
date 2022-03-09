import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Forms',
  name: 'forms',
  type: 'document',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Copy', name: 'copySet' },
  ],
  fields: [
    {
      title: 'Columns',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: '1 Column', value: 'oneCol' },
          { title: '2 Columns', value: 'twoCols' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'Headline',
      description: 'Add a headline to the top of the form.',
      name: 'headline',
      type: 'string',
      group: 'copySet',
    },
    {
      title: 'Tagline',
      description: 'Add a tagline below the headline.',
      name: 'tagline',
      type: 'portableText',
      group: 'copySet',
    },
    {
      title: 'CTA Button',
      description: 'Add a call to action to the button.',
      name: 'buttonCta',
      type: 'string',
      group: 'copySet',
    },
  ],
};
