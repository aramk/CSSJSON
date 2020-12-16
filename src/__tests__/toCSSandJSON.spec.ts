import { toCSS, toJSON } from '../index';

const cssString = `  @media (max-width: 800px) {
    #main #comments {
      margin: 0px;
      width: auto;
      background: red;
    }
    #main #buttons {
      padding: 5px 10px;
      color: blue;
    }
  }
  #main #content {
    margin: 0 7.6%;
    width: auto;
  }
  #nav-below {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1.625em;
    background-image: url(http://www.example.com/images/im.jpg);
  }
`;

const json = {
  'children': {
    '@media (max-width: 800px)': {
      'children': {
        '#main #comments': {
          'children': {},
          'attributes': {
            'margin': '0px',
            'width': 'auto',
            'background': 'red'
          }
        },
        '#main #buttons': {
          'children': {},
          'attributes': {
            'padding': '5px 10px',
            'color': 'blue'
          }
        }
      },
      'attributes': {}
    },
    '#main #content': {
      'children': {},
      'attributes': {
        'margin': '0 7.6%',
        'width': 'auto'
      }
    },
    '#nav-below': {
      'children': {},
      'attributes': {
        'border-bottom': '1px solid #ddd',
        'margin-bottom': '1.625em',
        'background-image': 'url(http://www.example.com/images/im.jpg)'
      }
    }
  },
  'attributes': {}
};

it('should return the expected css from json', async () => {
  const builtJson = toJSON(cssString)
  expect(builtJson).toEqual(json)
});

it('should return the expected css from json', async () => {
  const builtCSS = toCSS(json)
  expect(builtCSS).toBe(cssString)
});
