/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'orange',
      values: [
        { name: 'orange', value: '#ED5402' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#14141f' },
      ],
    },
  },
};

export default preview;
