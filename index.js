//1 задание
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

let worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 — то есть 10*31

////////2 задание
//Объект data
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

//Класс Transport
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return `Бренд: ${this.brand}`;
  }

  getPrice() {
    return `${this.price} руб.`;
  }
}

//Дочерний класс Car
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount() {
    return `Количество дверей: ${this.doors}`;
  }
}

//Дочерний класс Bike
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return `Максимальная скорость: ${this.maxSpeed} км/ч`;
  }
}

const block = document.querySelector(".transport__item"); //получаю контейнер, куда буду добавлять новую разметку

data.forEach((object) => {
  //перебираем наш массив и добавляем разметку
  if (object.type === "car") {
    //если тип транспортного средства "car", то создаем новый объект Car
    const car = new Car(object.type, object.price, object.brand, object.doors);

    // используем bind(), чтобы привязать контекст функции getDoorsCount() к объекту car
    const doorsCountFunc = car.getDoorsCount.bind(car);
    //создаем элемент разметки div и присваиваем ему содержание
    const carElement = document.createElement("div");
    carElement.innerHTML = `${car.getInfo()}
    Цена: ${car.getPrice()} ${doorsCountFunc()}`;
    carElement.className = "transport__item_div"; //создаем класс для нового элемента разметки
    block.appendChild(carElement); //добавляем разметку в контейнер

    const div = document.createElement("div"); //создаем элемент разметки div
    div.className = "transport__block"; //создаем класс для нового элемента разметки
    block.appendChild(div); //добавляем div в контейнер

    const img = document.createElement("img"); //создаем элемент разметки img
    img.className = "transport__img"; //создаем класс для нового элемента
    img.src = object.image; //добавляем значение атрибута из массива
    div.appendChild(img); //добавляем img в div
  } else if (object.type === "bike") {
    //если тип транспортного средства "bike", то создаем новый объект Bike
    const bike = new Bike(
      object.type,
      object.price,
      object.brand,
      object.maxSpeed
    );

    const bikeElement = document.createElement("div"); //создаем элемент разметки div и присваиваем ему содержание
    bikeElement.innerHTML = `${bike.getInfo()} 
    Цена: ${bike.getPrice()} ${bike.getMaxSpeed()}`;
    bikeElement.className = "transport__item_div"; //создаем класс для нового элемента разметки
    block.appendChild(bikeElement); //добавляем разметку в контейнер

    const div = document.createElement("div"); //создаем элемент разметки и кладем его в переменную "div"
    div.className = "transport__block"; //создаем класс для нового элемента разметки
    block.appendChild(div); //добавляем div в контейнер

    const img = document.createElement("img"); //создаем элемент разметки img
    img.className = "transport__img"; //создаем класс для нового элемента
    img.src = object.image; //добавляем значение атрибута из массива
    div.appendChild(img); //добавляем img в div
  }
});
