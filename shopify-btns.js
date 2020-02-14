/*<![CDATA[*/

(function() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  var opt = {
    "product": {
    "iframe": false,
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#FF0F57",
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#e62b67"
        },
        "font-weight": "bold",
        ":focus": {
          "background-color": "#e62b67"
        }
      },
      "variantTitle": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto"
    ]
    },
    "cart": {
    "iframe": false,
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#ff3072",
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#e62b67"
        },
        "font-weight": "bold",
        ":focus": {
          "background-color": "#e62b67"
        }
      },
      "title": {
        "color": "#232323"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#232323"
      },
      "lineItems": {
        "color": "#232323"
      },
      "subtotalText": {
        "color": "#232323"
      },
      "subtotal": {
        "color": "#232323"
      },
      "notice": {
        "color": "#232323"
      },
      "currency": {
        "color": "#232323"
      },
      "close": {
        ":hover": {
          "color": "#232323"
        },
        "color": "#232323"
      },
      "emptyCart": {
        "color": "#232323"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
    },
    "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#ff3072",
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#e62b67"
        },
        "font-weight": "bold",
        ":focus": {
          "background-color": "#e62b67"
        }
      },
      "variantTitle": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto"
    ]
    },
    "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#ff3072",
        ":hover": {
          "background-color": "#e62b67"
        },
        "font-weight": "bold",
        ":focus": {
          "background-color": "#e62b67"
        }
      }
    },
    "googleFonts": [
      "Roboto"
    ]
    },
    "option": {
    "styles": {
      "label": {
        "font-family": "Roboto, sans-serif"
      },
      "select": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "googleFonts": [
      "Roboto",
      "Roboto"
    ]
    },
    "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
    },
    "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#232323"
      },
      "title": {
        "color": "#232323"
      },
      "price": {
        "color": "#232323"
      },
      "quantity": {
        "color": "#232323"
      },
      "quantityIncrement": {
        "color": "#232323",
        "border-color": "#232323"
      },
      "quantityDecrement": {
        "color": "#232323",
        "border-color": "#232323"
      },
      "quantityInput": {
        "color": "#232323",
        "border-color": "#232323"
      }
    }
    }
    }

  function ShopifyBuyInit() {

    var client = ShopifyBuy.buildClient({
      domain: 'repone-strength.myshopify.com',
      storefrontAccessToken: 'cacddf005ae35dfd448f6b3f06664f3e',
    });
    window._GROWTHHERO_INIT_PIXEL(client);

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent('product', {
        id: [1506766716964],
        node: document.getElementById('product-component-65a40cea5fd'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: opt
      });

      ui.createComponent('product', {
        id: [1511958282276],
        node: document.getElementById('product-component-6bf8d54d208'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: opt
      });

      ui.createComponent('product', {
        id: [1524764409892],
        node: document.getElementById('product-component-9393db7a41a'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: opt
      });

    });
  }
})();
