import hus from "../img/hus.png";
import Image from "react-native";

//Was formerly const but constant cant be changed, so used let.
let data = [
  {
    id: "344455dg",
    name: "Orange",
    price: 250,
    description: "fresh from the farms",
    quantity: 3,
    vendor: "pa salieu",
    image: require("../rmg/orange.jpg"),
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  },

  {
    id: "293384dj",
    image: require("../rmg/banana.jpg"),
    name: "Banana",
    price: 500,
    quantity: 2,
    description: "fresh from the oguns",
    vendor: "pa salieu",
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  },

  {
    id: "292933xc",
    image: require("../rmg/pineapple.jpg"),
    name: "Pineapple",
    price: 300,
    quantity: 7,
    description: "fresh from the seas",

    vendor: "pa salieu",
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  },

  {
    id: "233446yu",
    image: require("../rmg/guava.jpg"),
    name: "Guava",
    price: 450,
    quantity: 4,
    description: "fresh from the seas",

    vendor: "pa salieu",
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  },

  {
    id: "531159bu",
    image: require("../rmg/mango.jpg"),
    name: "Mango",
    price: 190,
    quantity: 6,
    description: "fresh from the seas",
    vendor: "pa salieu",
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  },

  {
    id: "531159hy",
    image: require("../rmg/pawpaw.jpg"),
    name: "Paw-Paw",
    price: 250,
    quantity: 3,
    description: "fresh from the seas",

    vendor: "pa salieu",
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  },

  {
    id: "12222449000000",
    name: "Grape",
    image: require("../rmg/grape.jpg"),
    price: 300,
    quantity: 5,
    description: "blacker the berry",
    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg"
      }
    ]
  }
];
export default data;
