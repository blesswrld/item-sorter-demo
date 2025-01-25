const items = [
  {
    ratingRevievs: "264 отзыва",
    price: { oldUan: "4 333 грн", newUan: "3 799 грн" },
    name: "Motorola MOTO G4 (XT1622) Black",
    image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g4.jpg",
  },
  {
    ratingRevievs: "1355 отзывов",
    price: "4 999 грн",
    name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7.jpg",
  },
  {
    ratingRevievs: "426 отзывов",
    price: "5 199 грн",
    name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-2016.jpg",
  },
  {
    ratingRevievs: "403 отзыва",
    price: "4 349 грн",
    name: "Xiaomi Redmi Note 4X 3/32GB Black",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-4x.jpg",
  },
  {
    ratingRevievs: "488 отзывов",
    price: "6 199 грн",
    name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-2016.jpg",
  },
  {
    ratingRevievs: "198 отзывов",
    price: { oldUan: "3 495 грн", newUan: "2 995 грн" },
    name: "Lenovo K5 (A6020a40) Silver",
    image: "https://fdn2.gsmarena.com/vv/bigpic/lenovo-vibe-k5.jpg",
  },
  {
    ratingRevievs: "352 отзыва",
    price: { oldUan: "9 799 грн", newUan: "7 999 грн" },
    name: "Apple iPhone 5s 16GB Space Gray",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5s-ofic.jpg",
  },
  {
    ratingRevievs: "59 отзывов",
    price: "5 999 грн",
    name: "Nokia 5 Dual Sim Tempered Blue",
    image: "https://fdn2.gsmarena.com/vv/bigpic/nokia-5-1.jpg",
  },
  {
    ratingRevievs: "119 отзывов",
    price: "11 999 грн",
    name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017.jpg",
  },
  {
    ratingRevievs: "1106 отзывов",
    price: "3 999 грн",
    name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5.jpg",
  },
  {
    ratingRevievs: "380 отзывов",
    price: "2 199 грн",
    name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/huawei-y3-ii.jpg",
  },
  {
    ratingRevievs: "86 отзывов",
    price: { oldUan: "24 999 грн", newUan: "22 999 грн" },
    name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
  },
  {
    ratingRevievs: "177 отзывов",
    price: "6 499 грн",
    name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p8-lite-2017.jpg",
  },
  {
    ratingRevievs: "347 отзывов",
    price: "4 299 грн",
    name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-4x.jpg",
  },
  {
    ratingRevievs: "709 отзывов",
    price: "2 799 грн",
    name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-mini.jpg",
  },
  {
    ratingRevievs: "527 отзывов",
    price: "3 999 грн",
    name: "Huawei Y6 Pro Gold + чехол + защитное стекло!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/huawei-y6-pro.jpg",
  },
  {
    ratingRevievs: "66 отзывов",
    price: "16 499 грн",
    name: "Apple iPhone 6s 32GB Gold",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s.jpg",
  },
  {
    ratingRevievs: "14 отзывов",
    price: "11 499 грн",
    name: "Apple iPhone 6 32GB Space Gray",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6.jpg",
  },
  {
    ratingRevievs: "70 отзывов",
    price: { oldUan: "7 399 грн", newUan: "5 999 грн" },
    name: "Asus ZenFone 2 32GB (ZE551ML) Black",
    image: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-2-ze551ml.jpg",
  },
  {
    ratingRevievs: "45 отзывов",
    price: "4 299 грн",
    name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/nokia-3.jpg",
  },
  {
    ratingRevievs: "376 отзывов",
    price: "3 899 грн",
    name: "Meizu M3 Note 32GB Grey (Международная версия)",
    image: "https://fdn2.gsmarena.com/vv/bigpic/meizu-m3-note.jpg",
  },
  {
    ratingRevievs: "111 отзывов",
    price: { oldUan: "9 999 грн", newUan: "7 999 грн" },
    name: "Sony Xperia X Dual (F5122) White",
    image: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-x.jpg",
  },
  {
    ratingRevievs: "40 отзывов",
    price: "2 222 грн",
    name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!",
    image: "https://fdn2.gsmarena.com/vv/bigpic/lenovo-vibe-c.jpg",
  },
];

function sortByFeedbacks(arr) {
  const temp = JSON.parse(JSON.stringify(arr));

  temp.forEach((item) => {
    item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, "");
  });

  temp.sort((a, b) => (a.ratingRevievs > b.ratingRevievs ? 1 : -1));

  document.querySelector(".result").innerHTML = "";

  temp.forEach((item) => {
    if (typeof item.price === "string") {
      item.price = +item.price.replace(/\D/g, "");
    } else {
      item.price = +item.price.newUan.replace(/\D/g, "");
    }

    document.querySelector(".result").innerHTML += `
      <h3>${item.name}</h3>
      <div>Цена: ${item.price} грн.</div>
      <div>Отзывов: ${item.ratingRevievs}</div>
      <div><img src="${item.image}" alt="${item.name}" /></div>
    `;
  });
}

function sortByPrice(arr) {
  const temp = JSON.parse(JSON.stringify(arr));

  temp.forEach((item) => {
    if (typeof item.price === "string") {
      item.price = +item.price.replace(/\D/g, "");
    } else {
      item.price = +item.price.newUan.replace(/\D/g, "");
    }
  });

  temp.sort((a, b) => (a.price > b.price ? 1 : -1));

  document.querySelector(".result").innerHTML = "";

  temp.forEach((item) => {
    document.querySelector(".result").innerHTML += `
      <h3>${item.name}</h3>
      <div>Цена: ${item.price} грн.</div>
      <div>Отзывов: ${item.ratingRevievs}</div>
      <div><img src="${item.image}" alt="${item.name}" /></div>
    `;
  });
}

document.querySelector(".price").addEventListener("click", () => {
  sortByPrice(items);
});

document.querySelector(".feed").addEventListener("click", () => {
  sortByFeedbacks(items);
});
