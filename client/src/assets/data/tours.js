import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";


const tours = [
  {
    id: "01",
    title: "Вестминстерский мост",
    city: "Лондон",
    distance: 300,
    address:'где-то',
    price: 99,
    maxGroupSize: 10,
    desc: "здесь должно быть описание",
    reviews: [
      {
        name: "Зина Кухос",
        rating: 4.6,
      },
      {
        name: "Анастасия Мумча",
        rating: 3,
      },
      {
        name: "Василий Копченный",
        rating: 5,
      },
      {
        name: "Григорий Ляхов",
        rating: 1,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Бали, Индонезия",
    city: "Индонезия",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Горные снега, Тайланд",
    city: "Тайланд",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Красивый Восход, Тайланд",
    city: "Тайланд",
    distance: 500,
    address:'Где-то',
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Нуса Пендиа, Индонезия",
    city: "Индонезия",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [
      {
        name: "Артем Лебедев",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Вишневые Цвета Весны",
    city: "Япония",
    distance: 500,
    address:'Где-то',
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [
      {
        name: "Александр Макгонагол",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Лофотенские Острова",
    city: "Франция",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [
      {
        name: "Игорь Бурля",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Горные снега, Тайланд",
    city: "Тайланд",
    distance: 500,
    address:'Где-то',
    price: 99,
    maxGroupSize: 8,
    desc: "здесь должно быть описание",
    reviews: [
      {
        name: "Иван Ваш",
        rating: 4.6,
      },
      {
        name: "Николай Замутин",
        rating: 5,
      },

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
