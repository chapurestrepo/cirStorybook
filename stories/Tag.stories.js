

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Example/Tag',
  tags: ['autodocs'],
  render: ({ label}) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `<div>${label}</div>`;

  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const L = {
  args: {
    label: 'Lab el L',
  },
};

export const M = {
  args: {
    label: 'Lab el M',
  },
};