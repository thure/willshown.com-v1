define([
  'underscore',
  'text!amd/baxter.ejs',
  'text!amd/brewer.ejs',
  'text!amd/cardboard.ejs',
  'text!amd/cinch.ejs',
  'text!amd/continuing.ejs',
  'text!amd/diagonal.ejs',
  'text!amd/flex.ejs',
  'text!amd/geof.ejs',
  'text!amd/icex.ejs',
  'text!amd/leftnav.ejs',
  'text!amd/redesign.ejs',
  'text!amd/thunderpony.ejs',
  'text!amd/townhog.ejs'
], function(
  _,
  baxter,
  brewer,
  cardboard,
  cinch,
  continuing,
  diagonal,
  flex,
  geof,
  icex,
  leftnav,
  redesign,
  thunderpony,
  townhog
  ){

  return{

    'MSN Prime': {
      'Diagonal motion carousel': {
        asset: {
          type: 'video',
          name: 'diagonal'
        },
        role: 'prototyper',
        description: diagonal
      },
      'Editable design prototype': {
        asset: {
          type: 'video',
          name: 'icex'
        },
        role: 'prototyper',
        description: icex
      },
      'Flexible content display': {
        asset: {
          type: 'video',
          name: 'flex'
        },
        role: ['designer', 'developer'],
        description: flex
      },
      'Left nav prototype': {
        asset: {
          type: 'video',
          name: 'leftnav'
        },
        role: ['interaction designer', 'prototyper'],
        description: leftnav
      }
    },
    'Apigee Enterprise': {
      'Thunderpony': {
        asset: {
          type: 'image',
          name: 'thunderpony.png'
        },
        role: 'prototyper',
        description: thunderpony
      },
      'Redesign': {
        asset: {
          type: 'image',
          name: 'redesign.png'
        },
        role: 'designer',
        description: redesign
      },
      'Continuing use': {
        asset: {
          type: 'image',
          name: 'continuing.png'
        },
        role: 'none',
        description: continuing
      }
    },
    'Works in progress': {
      'Pi Brewer': {
        asset: {
          type: 'image',
          name: 'brewer.jpeg'
        },
        role: 'hacker',
        description: brewer
      },
      'Doorbot': {
        asset: {
          type: 'image',
          name: 'baxter.jpeg'
        },
        role: 'hacker',
        description: baxter
      },
      'GEOF': {
        asset: {
          type: 'image',
          name: 'geof.jpeg'
        },
        role: ['designer', 'developer'],
        description: geof
      }
    },
    'Other work': {
      'Cardboard.coop': {
        asset: {
          type: 'video',
          name: 'cardboard'
        },
        role: ['designer', 'developer'],
        description: cardboard
      },
      'TownHog': {
        asset: {
          type: 'image',
          name: 'townhog.png'
        },
        role: 'developer',
        description: townhog
      },
      'CINCH': {
        asset: {
          type: 'video',
          name: 'cinch'
        },
        role: 'developer',
        description: cinch
      }
    }

  }

});