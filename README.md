# CSS-JSON Converter for JavaScript, v.2.0

By Aram Kocharyan, http://aramk.com/  
Released under the MIT licence  
Converts CSS to JSON and back.

## Usage

	// To JSON, ignoring order of comments etc
	var json = CSSJSON.toJSON(cssString);

	// To CSS
	var css = CSSJSON.toCSS(jsonObject);

## Sample

See example.html

### JSON

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

### CSS

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
