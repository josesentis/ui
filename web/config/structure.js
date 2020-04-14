import toggleImage from '../assets/img/toggle.png';

const structure = [
  {
    name: 'elements',
    components: [
      {
        name: 'Button',
        slug: '/button'
      },
      {
        name: 'Picture',
        slug: '/picture'
      }
    ]
  },
  {
    name: 'structures',
    components: [
      {
        name: 'List',
        slug: '/list'
      },
      {
        name: 'Responsive table',
        slug: '/responsive-table'
      }
    ]
  },
  {
    name: 'navigation',
    components: [
      {
        name: 'Breadcrumbs',
        slug: '/breadcrumbs'
      }
    ]
  },
  {
    name: 'form',
    components: [
      {
        name: 'Checkbox',
        slug: '/checkbox'
      },
      {
        name: 'Radio',
        slug: '/radio'
      },
      {
        name: 'Incremental input',
        slug: '/incremental-input'
      },
      {
        name: 'Select',
        slug: '/select'
      }
    ]
  },
  {
    name: 'Helpers',
    components: [
      {
        name: 'Toggle',
        slug: '/toggle',
        img: toggleImage
      }
    ]
  }
];

export default structure;
