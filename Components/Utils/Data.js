import {COLORS} from './Colors';
import {IMAGES} from './Images';
import FruitsSvg from '../../assets/images/FruitsImage.svg';

export const OnBoardData = [
  {
    heading: 'Welcome',
    subHaeding: 'You are about to enter a brand new experience of Vegetables',
    image: IMAGES.onBoardImageOne,
    id: 0,
    gradientOneColor: 'rgba(102, 171, 134, 0)ss',
    gradientTwoColor: '#8AE1B2',
    locations: [0, 1],
    textAlign: 'center',
    buttonColor: COLORS.onBoardOneSecondary,
    buttonText: 'continue',
  },
  {
    heading: 'Have better Health',
    subHaeding:
      'We provides the good organic food which was grown in farms by the farmers  which maintains ur health good ',
    id: 1,
    image: IMAGES.onBoardImageTwo,
    gradientOneColor: 'rgba(240, 238, 241, 0)',
    gradientTwoColor: '#F0EEF1',
    locations: [0, 1],
    buttonColor: COLORS.onBoardTwoSecondary,
    buttonText: 'continue',
  },
  {
    heading: 'Vegetables or Fruits',
    subHaeding:
      'Not only vegetables , we also provide fresh and riped fruits for u , which are fresh . The day plucked fruits will be delivered.',
    id: 2,
    image: IMAGES.onBoardImageThree,
    gradientOneColor: 'rgba(244, 246, 145, 0)',
    gradientTwoColor: '#F4F691',
    locations: [0, 1],
    buttonColor: COLORS.onBoardThreeSecondary,
    buttonText: 'continue',
  },
  {
    heading: 'Delivery ???',
    subHaeding:
      'we ensures you best delivery and good delivery.Return policy also available .We will be in 30 min from your order at your doorstep.',
    id: 3,
    image: IMAGES.onBoardImageFour,
    gradientOneColor: 'rgba(38, 38, 36, 0.23)',
    gradientTwoColor: '#262624',
    locations: [0.09, 0.9],
    buttonColor: COLORS.onBoardFourSecondary,
    buttonText: 'LOGIN',
  },
];

export const CategoriesData = [
  {
    image: require('../../assets/images/VegetablesImage.png'),
    name: 'Vegetables',
    id: 0,
  },
  {
    svgImage: () => <FruitsSvg />,
    name: 'Fruits',
    id: 1,
  },
  {
    image: require('../../assets/images/NutsImage.png'),
    name: 'Nuts',
    id: 2,
  },
  {
    image: require('../../assets/images/DryFruits.png'),
    name: 'Dry Fruits',
    id: 3,
  },
];

export const Popular = [
  {
    id: 0,
    image: require('../../assets/images/Tomato.png'),
    desc: '20% discount',
    rate: '$ 5.5',
  },
  {
    id: 1,
    image: require('../../assets/images/Orange.png'),
    desc: '10% discount',
    rate: '$ 10.5',
  },
  {
    id: 2,
    image: require('../../assets/images/Orange.png'),
    desc: '10% discount',
    rate: '$ 10.5',
  },
  {
    id: 3,
    image: require('../../assets/images/Tomato.png'),
    desc: '20% discount',
    rate: '$ 5.5',
  },
  {
    id: 4,
    image: require('../../assets/images/Orange.png'),
    desc: '10% discount',
    rate: '$ 10.5',
  },
  {
    id: 5,
    image: require('../../assets/images/Orange.png'),
    desc: '10% discount',
    rate: '$ 10.5',
  },
];

export const CartDetails = [
  {
    image: require('../../assets/images/Tomatoes.png'),
    name: 'Tomatoes',
    time: 'ordered 01d 12hrs 20min before',
    items: 4,
    price: '$ 17.5',

    paid: false,
    id: 0,
  },
  {
    image: require('../../assets/images/Carrot.png'),
    name: 'Carrots',
    time: 'ordered 01d 23hrs 20min before',
    items: 2,
    price: '$ 12.5',

    paid: false,
    id: 1,
  },
  {
    image: require('../../assets/images/Apples.png'),
    name: 'Apples',
    time: 'ordered 02d 12hrs 20min before',
    items: 1,
    price: '$ 22.5',

    paid: false,
    id: 2,
  },
  {
    image: require('../../assets/images/Almond.png'),
    name: 'Almond',
    time: 'ordered 4d 02hrs 20min before',
    items: 3,
    price: '$ 10.5',

    paid: true,
    id: 3,
  },
  {
    image: require('../../assets/images/Grapes.jpg'),
    name: 'Grapes',
    time: 'ordered 04d 02hrs 50min before',
    items: 1,
    price: '$ 22.5',

    paid: false,
    id: 4,
  },
  {
    image: require('../../assets/images/Oranges.jpg'),
    name: 'Oranges',
    time: 'ordered 05d 12hrs 20min before',
    items: 3,
    price: '$ 10.5',

    paid: true,
    id: 5,
  },
  {
    image: require('../../assets/images/Brinjal.jpg'),
    name: 'Brinjal',
    time: 'ordered 10d 12hrs 20min before',
    items: 1,
    price: '$ 22.5',

    paid: true,
    id: 6,
  },
  {
    image: require('../../assets/images/Banana.jpg'),
    name: 'Banana',
    time: 'ordered 11d 12hrs 20min before',
    items: 3,
    price: '$ 10.5',

    paid: false,
    id: 7,
  },
];

export const PAYMENTDATA = [
  {
    id: 3243243543653656,
    payment: true,
    first: true,
  },
  {
    id: 2143243543653656,
    payment: true,
  },
  {
    id: 1324323543653656,
    payment: false,
  },
  {
    id: 324324336536566,
    payment: true,
  },
  {
    id: 2132432435433656,
    payment: false,
  },
  {
    id: 2243243543653667,
    payment: true,
  },
  {
    id: 1324324354365568,
    payment: true,
  },
  {
    id: 3213243435436536,
    payment: false,
  },
  {
    id: 4313243435436536,
    payment: true,
  },
  {
    id: 2243243536536687,
    payment: true,
  },
  {
    id: 1324324354355688,
    payment: true,
  },
  {
    id: 321243435436536,
    payment: false,
  },
  {
    id: 4313203435436536,
    payment: true,
  },
];
