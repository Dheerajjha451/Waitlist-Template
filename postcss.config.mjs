/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      backgroundImage: {
        'page-background': "url('/div.svg')",
      },
    },
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
