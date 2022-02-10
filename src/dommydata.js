const faqData = [
  {
    question: `Do I need to pay to Instapay even when there is no transaction going on in my business?`,
    answer:
      'The moment you complete the initial transaction with us, every other aspect of payment will be catered for.',
    id: 1,
    class:'One'
  },
  {
    question: 'what is the object oriented way of being wealthy',
    answer: 'Inheritance',
    id: 2,
    class:'Two'
  },
  {
    question: 'Somebody that has no  body and nose is called?',
    answer: 'Nobody knows',
    id: 3,
    class:'Three'
  },
  {
    question: 'what goes up and never comes down ?',
    answer: `one's Age`,
    id: 4,
    class:'Four'
  },
];

const farmers = [
  {
    name: 'Adeola Funsho',
    photo_url: '/images/farmer-1.jpg',
    address: 'fish farmer',
    id: 1,
    product: [
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
    ],
  },
  {
    name: 'Ademola Adetutu',
    photo_url: '/images/farmer-2.jpg',
    address: 'fish farmer',
    id: 2,
    product: [
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
    ],
  },
  {
    name: 'Bob Sam',
    photo_url: '/images/farmer-3.jpg',
    address: 'fish farmer',
    id: 3,
    product: [
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
    ],
  },
  {
    name: 'Eziene Juilet',
    photo_url: '/images/farmer-4.jpg',
    address: 'Cereal farmer',
    id: 4,
    product: [
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
    ],
  },
  {
    name: 'siamak poorjam',
    photo_url: '/images/farmer-5.jpg',
    address: 'fruit farmer',
    id: 5,
    product: [
      {
        img: '/images/cherry.png',
        name: 'Cherry',
      },
      {
        img: '/images/strawberry.png',
        name: 'Straw berry',
      },
      {
        img: '/images/peppers.png',
        name: 'Pepper',
      },
    ],
  },
];
let cart = [
  {
    img: '/images/cherry.png',
    name: 'Cherry',
    price: 2000,
  },
  {
    img: '/images/strawberry.png',
    name: 'Straw berry',
    price: 2000,
  },
  {
    img: '/images/peppers.png',
    name: 'Pepper',
    price: 2000,
  },
];
let allProduct = [
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:1,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:2,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:3,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:4,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:5,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:6,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:7,

  },
  {
    img: '/images/cherry.png',
    address: 'Cherry',
    price: 2000,
    id:8,

  },
]
let Data = {
  faqData,
  farmers,
  cart,
  allProduct
};
export default Data;
