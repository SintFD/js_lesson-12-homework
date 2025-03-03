// Задача: Анализ заказов клиентов
// У тебя есть массив заказов, где каждый заказ содержит информацию о клиенте,
// товарах и их количестве. Тебе нужно обработать этот массив, используя filter, find,
// map и flatMap, чтобы выполнить несколько задач.
// Дано:

const orders = [
  {
    orderId: 101,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 1, name: "Laptop", quantity: 1, price: 1200 },
      { productId: 2, name: "Mouse", quantity: 2, price: 25 },
    ],
  },
  {
    orderId: 102,
    customer: { id: 2, name: "Bob", email: "bob@example.com" },
    items: [
      { productId: 3, name: "Keyboard", quantity: 1, price: 70 },
      { productId: 4, name: "Monitor", quantity: 1, price: 300 },
    ],
  },
  {
    orderId: 103,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 5, name: "Headphones", quantity: 1, price: 100 },
      { productId: 2, name: "Mouse", quantity: 1, price: 25 },
    ],
  },
];

// 1. filter: Найти все заказы клиента с email "alice@example.com".

const emails = orders.filter(
  ({ customer: { email } }) => email === "alice@example.com"
);

// console.log(emails);

// 2. find: Найти заказ, в котором есть товар с productId: 4.

// const productId = orders.find(({ items }) => {
//   let find;
//   items.forEach(({ productId }) => {
//     if (productId === 4) {
//       find = true;
//     }
//   });
//   return find;
// });

const productId = orders.find(({ items }) =>
  items.find(({ productId }) => productId === 4)
);

// console.log(productId);

// 3. map: Создать массив с суммой стоимости каждого заказа.

const sum = orders.map(({ items }) => {
  let sum = 0;
  items.forEach(({ price }) => {
    sum = sum + price;
  });
  return sum;
});

// console.log(sum);

// 4. flatMap: Получить массив всех товаров из всех заказов (без вложенных массивов)

const allGoods = orders.flatMap(({ items }) => {
  return items.flatMap((product) => {
    return product;
  });
});

// console.log(allGoods);

// Задача: Анализ заказов клиентов (Продвинутая версия)
// У тебя есть массив заказов, где каждый заказ содержит информацию о клиенте,
// товарах и их количестве. Твоя задача — выполнить анализ данных, используя filter,
// find, map, flatMap, every, some.
// Дано:

const newOrders = [
  {
    orderId: 201,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 1, name: "Laptop", quantity: 1, price: 1500 },
      { productId: 2, name: "Mouse", quantity: 2, price: 50 },
    ],
    status: "delivered",
  },
  {
    orderId: 202,
    customer: { id: 2, name: "Bob", email: "bob@example.com" },
    items: [
      { productId: 3, name: "Keyboard", quantity: 1, price: 100 },
      { productId: 4, name: "Monitor", quantity: 1, price: 500 },
    ],
    status: "pending",
  },
  {
    orderId: 203,
    customer: { id: 3, name: "Charlie", email: "charlie@example.com" },
    items: [
      { productId: 5, name: "Headphones", quantity: 1, price: 200 },
      { productId: 2, name: "Mouse", quantity: 1, price: 50 },
    ],
    status: "shipped",
  },
  {
    orderId: 204,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 6, name: "Webcam", quantity: 1, price: 120 },
      { productId: 4, name: "Monitor", quantity: 2, price: 500 },
    ],
    status: "delivered",
  },
];

// Твоя задача:
// 1. filter: Найти все заказы клиента с email "alice@example.com".
const newEmail = newOrders.filter(
  ({ customer: { email } }) => email === "alice@example.com"
);
// console.log(newEmail);

// 2. find: Найти заказ, в котором есть товар с productId: 6 (Webcam).

const newProductId = newOrders.find(({ items }) => {
  let find;
  items.forEach(({ productId }) => {
    if (productId === 6) {
      find = true;
    }
  });
  return find;
});

// console.log(newProductId);

// 3. map: Создать массив объектов с информацией о заказах в формате:
// { orderId: 201, total: 1600, status: "delivered" } (где total — общая сумма товаров в заказе).

const ordersInfo = newOrders.map(({ orderId, status, items }) => {
  let total = 0;

  items.forEach(({ quantity, price }) => {
    total = total + quantity * price;
  });

  return { orderId, total, status };
});

// console.log(ordersInfo);

// 4. flatMap: Получить массив всех товаров (убрав вложенность).

const newAllGoods = newOrders.flatMap(({ items }) => {
  return items.flatMap((product) => {
    return product;
  });
});

// console.log(newAllGoods);

// 5. every: Проверить, все ли заказы имеют статус "delivered".

const checkEveryStat = newOrders.every(({ status }) => status === "delivered");

// console.log(checkEveryStat);

// 6. some: Проверить, есть ли хотя бы один заказ со статусом "pending

const checkSomeStat = newOrders.some(({ status }) => status === "delivered");

// console.log(checkSomeStat);
