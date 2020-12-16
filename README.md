# CSS-JSON Converter for JavaScript

CSS-JSON Converter for JavaScript  
Converts CSS to JSON and back.  
Version 2.1

Released under the MIT license.

## Installation

### Bower

```bash
bower install aramk-css-to-json --save
```

### NPM

```bash
npm install css-to-json
```

## Usage

### JavaScript

```javascript
// To JSON
var json = CSSJSON.toJSON(cssString);

// To CSS
var css = CSSJSON.toCSS(jsonObject);

// Appending to DOM (HTMLHeadElement)
// alias (global): createCSS(css);
// CSSJSON.toHEAD(json);
CSSJSON.toHEAD(css); // returns HTMLStyleElement
```

### npm run / CLI

To use CSSJSON from your command-line interface or with npm scripts there is [cssjson-cli](https://github.com/jakedex/cssjson-cli).

```
$ cssjson input_file [--to-css] [--output|-o output_file]
```

## Sample

See example.html

### JSON

```json
{
  "children": {
    "@media (max-width: 800px)": {
      "children": {
        "#main #comments": {
          "children": {},
          "attributes": {
            "margin": "0px",
            "width": "auto",
            "background": "red"
          }
        },
        "#main #buttons": {
          "children": {},
          "attributes": {
            "padding": "5px 10px",
            "color": "blue"
          }
        }
      },
      "attributes": {}
    },
    "#main #content": {
      "children": {},
      "attributes": {
        "margin": "0 7.6%",
        "width": "auto"
      }
    },
    "#nav-below": {
      "children": {},
      "attributes": {
        "border-bottom": "1px solid #ddd",
        "margin-bottom": "1.625em",
        "background-image": "url(http://www.example.com/images/im.jpg)"
      }
    }
  },
  "attributes": {}
}
```

### CSS

```css
@media (max-width: 800px) {
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
```
