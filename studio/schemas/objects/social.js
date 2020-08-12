// export default {
//   name: 'socail',
//   type: 'object',
//   title: 'Social Media Links',
//   fields: [
//     {
//       name: 'twitter',
//       type: 'url',
//       title: 'Twitter',
//       description: 'Here you would put the URL for the twitter profile'
//     },
//     {
//       name: 'instagram',
//       type: 'url',
//       title: 'Instagram',
//       description: 'Here you would put the URL for the instagram profile'
//     },
//     {
//       name: 'github',
//       type: 'url',
//       title: 'Github',
//       description: 'Here you would put the URL for the github profile'
//     },
//     {
//       name: 'linkedIn',
//       type: 'url',
//       title: 'LinkedIn',
//       description: 'Here you would put the URL for the linkedIn profile'
//     },
//     {
//       name: 'website',
//       type: 'url',
//       title: 'Website',
//       description: 'Here you would put the URL for the website profile'
//     }
//   ]
// }

// ^^^^^^^^^^^^^^^^^^this would be the long way, you could do it a different way below 

const services = ['twitter', 'instagram', 'github', 'linkedIn']

export default {
  name: 'social',
  type: 'document',
  title: 'Social Media Links',

  fields: services.map(name => ({
    name, 
    type: 'url',
    description: `The full URL to the ${name} profile`
  }))
  .concat({
    name: 'website',
    type: 'url',
    title: 'Website',
    description: 'The URL for the website'
  })
}