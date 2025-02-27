module.exports = {
  title: 'React Easy Diagram',
  tagline: 'Open source library to build highly customazible interactive React diagrams with easy.',
  url: 'https://tokarchyn.github.io/react-easy-diagram/',
  baseUrl: '/react-easy-diagram/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tokarchyn', // Usually your GitHub org/user name.
  projectName: 'react-easy-diagram', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'React Easy Diagram',
      logo: {
        alt: 'React Easy Diagram',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          label: 'Examples',
          position: 'right',
          items: [
            {
              label: 'Basic',
              to: 'examples/basic',
            },
            {
              label: 'Calculator',
              to: 'examples/calculator',
            },
            {
              label: 'Configure default link',
              to: 'examples/configureDefaultLink',
            },
            {
              label: 'Configure default port',
              to: 'examples/configureDefaultPort',
            },
            {
              label: 'Performance',
              to: 'examples/performance',
            },
            {
              label: 'Port position',
              to: 'examples/portPosition',
            },
            {
              label: 'Position snapping',
              to: 'examples/positionSnapping',
            },
            {
              label: 'Update ports position',
              to: 'examples/updatePortsPosition',
            },
            {
              label: 'Configure user interaction',
              to: 'examples/configureUserInteraction',
            },
            // {
            //   label: 'Dynamic ports',
            //   to: 'examples/dynamicPorts',
            // },
          ],
        },
        {
          href: 'https://github.com/tokarchyn/react-easy-diagram',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tokarchyn Vitalii.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tokarchyn/react-easy-diagram/edit/main/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
