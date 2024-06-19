import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id : "heading" }, "Namaste React 🚀");
// console.log(heading);  // React element is an Object at the end of day.

// //JSX => ReactElement => ReactElement JS Object => render html elemene
// // babel transpiles JSX => ReactElement 
// const Title = () => (<h1 id="heading" className="head" tabIndex="5">Namaste React using JSX!! 🚀</h1>);
// const jsxHeading = (
//     <h1 id="heading" className="head" tabIndex="5">Namaste React using JSX 🚀
//        <Title /> 
//     </h1>
// );
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // console.log(root);

// root.render(jsxHeading);

// //React Functional Component
// const HeadingComponent = () => {
//     return (
//         <div>
//             <Title />
//             <Title></Title>
//             {Title()}
//             {jsxHeading}
//             <h1 id="heading" className="head" tabIndex="5">Namanbnhste React Functional Component</h1>;
//         </div>
//     );
// };
// root.render(<HeadingComponent />);
// root.render(HeadingComponent());
//nested element
// const parent = React.createElement(
//     "div",
//     { id : "parent" },
//     React.createElement(
//         "div",
//         { id : "child" },
//         React.createElement("h1", {}, "I'm an h1 tag")
//     )
// );
// console.log(parent);

//sibling element
// const parentSibling = React.createElement(
//     "div",
//     { id : "parent" },
//     React.createElement(
//         "div",
//         { id : "child" },[
//             React.createElement("h1", {}, "I'm an h1 tag"),
//             React.createElement("h2", {}, "I'm an h2 tag")
//         ]
//     )
// );
// console.log(parentSibling);

//nested sibling element
// const nestedParentSibling = React.createElement("div", { id : "parent" },[
//     React.createElement("div", { id : "child" },[
//             React.createElement("h1", {}, "I'm an h1 tag"),
//             React.createElement("h2", {}, "I'm an h2 tag")
//         ]),
//     React.createElement("div", { id : "child2" },[
//             React.createElement("h1", {}, "I'm an h1 tag"),
//             React.createElement("h2", {}, "I'm an h2 tag")
//         ])
//     ]
// );
// console.log(nestedParentSibling);
// root.render(nestedParentSibling);
const resList = [
    {
      "info": {
        "id": "769456",
        "name": "Pizza Hut",
        "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
        "locality": "Kalikapur",
        "areaName": "Kolkata",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹189"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-kalikapur-kolkata-kolkata-769456",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "719437",
        "name": "McDonald's",
        "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
        "locality": "KASBA",
        "areaName": "Rajdanga road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American",
          "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "630",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 00:50:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-kasba-rajdanga-road-kolkata-719437",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "39309",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39309.JPG",
        "locality": "Kasba",
        "areaName": "Kasba",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 02:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-kasba-kolkata-39309",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "697216",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Kasba",
        "areaName": "B.B. Chatterjee Street",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "2456",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 01:57:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-kasba-b-b-chatterjee-street-kolkata-697216",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "120155",
        "name": "Cakes",
        "cloudinaryImageId": "xo4xq9ufqmplnusb9nqs",
        "locality": "RAJDANGA MAIN ROAD",
        "areaName": "RAJDANGA MAIN ROAD",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Snacks"
        ],
        "avgRating": 4.7,
        "parentId": "4861",
        "avgRatingString": "4.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-19 21:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
              "shortDescription": "Perfect cake delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                    "shortDescription": "Perfect cake delivery"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cakes-rajdanga-main-road-kolkata-120155",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "77719",
        "name": "The Biryani Inc. By EatVerse",
        "cloudinaryImageId": "55614156379db324675650213bb544a8",
        "locality": "Near Ballygunge Station",
        "areaName": "Kasba",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Kebabs"
        ],
        "avgRating": 4.4,
        "parentId": "524945",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-biryani-inc-by-eatverse-near-ballygunge-station-kasba-kolkata-77719",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "285428",
        "name": "Kathleen",
        "cloudinaryImageId": "e40c5b9a0187a3666d7936275ebf020a",
        "locality": "Santoshpur",
        "areaName": "Garfa",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Snacks",
          "Desserts",
          "Continental"
        ],
        "avgRating": 4.3,
        "parentId": "10674",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-19 21:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kathleen-santoshpur-garfa-kolkata-285428",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "580620",
        "name": "GetAWay-Ice Creams & Desserts",
        "cloudinaryImageId": "8194c8fed09497bce3714d2586653545",
        "locality": "South Kolkata",
        "areaName": "Dhakuria",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Healthy Food",
          "Sweets"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "354819",
        "avgRatingString": "4.6",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹69"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-south-dhakuria-kolkata-580620",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "45571",
        "name": "Rang De Basanti Dhaba",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/611ca0c9-e783-4261-8d9c-e5a5ff4c30e2_45571.jpg",
        "locality": "E M Bypass",
        "areaName": "E M Bypass",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Kebabs",
          "Mughlai",
          "Biryani",
          "Punjabi",
          "Desserts",
          "Tandoor",
          "Indian",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "758",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/rang-de-basanti-dhaba-e-m-bypass-kolkata-45571",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "165270",
        "name": "Mama Mia! - Italian Ice Creams & Cakes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/95d3849e-1d02-4523-81e3-f2ec4b51ad09_165270.jpg",
        "locality": "Ballygunge",
        "areaName": "Ballygunge",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Bakery",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.7,
        "parentId": "471728",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
              "shortDescription": "Perfect cake delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                    "shortDescription": "Perfect cake delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-ballygunge-kolkata-165270",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "18110",
        "name": "Bhojohori Manna",
        "cloudinaryImageId": "998b9bfa20e65aeb41fb893624609233",
        "locality": "Ballygunge",
        "areaName": "Ballygunge",
        "costForTwo": "₹900 for two",
        "cuisines": [
          "Bengali",
          "Thalis",
          "North Indian",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "113",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-19 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bhojohori-manna-ballygunge-kolkata-18110",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "58613",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/72236cce-3703-4365-a19b-5adba2eaf701_58613.jpg",
        "locality": "Near Falguni, Picnic Garden Road",
        "areaName": "Tiljala",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-19 22:10:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-near-falguni-picnic-garden-road-tiljala-kolkata-58613",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "576275",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "locality": "Ravindra Pally",
        "areaName": "Raj Danga Main Road",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-19 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-ravindra-pally-raj-danga-main-road-kolkata-576275",
        "type": "WEBLINK"
      }
    }];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    // const { resName, cuisine } = props;
    // console.log(props);
    // console.log(props.resData);
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;
    const { deliveryTime } = sla;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            {/* <h3>{resName}</h3>
            <h4>{cuisine}</h4> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            {/* <h4>4.4 stars</h4>
            <h4>38 minutes</h4> */}
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/* <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" />
                <RestaurantCard resName="KFC" cuisine= "Burger, Fast Food" /> */}
                {resList.map((e) => {
                    return (<RestaurantCard key={e.info.id} resData={e}/>)
                })}
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/>
                <RestaurantCard resData={resList[9]}/>
                <RestaurantCard resData={resList[10]}/>
                <RestaurantCard resData={resList[11]}/>
                <RestaurantCard resData={resList[12]}/> */}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);