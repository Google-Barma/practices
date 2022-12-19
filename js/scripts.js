"strict";

// const cart = {
//   items: [{ name: "kephir", price: 33, quantity: 2 }],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (let item of this.items) {
//       if (product.name === item.name) {
//         item.quantity += 1;

//         return `Added '${product.name}' to the cart!`;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);

//     return `Added '${newProduct.name}' to the cart!`;
//   },
//   remove(productName) {
//     const allItems = this.items;
//     for (let i = 0; i < allItems.length; i++) {
//       if (productName === allItems[i].name) {
//         allItems.splice(i, 1);
//       }
//     }

//     return `${productName} was removed from the product list`;
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;

//     for (let item of this.items) {
//       total += item.price * item.quantity;
//     }

//     return `Total price: ${total} credits.`;
//   },
//   incriseQuantity(name, number) {
//     const allItems = this.items;
//     let updatedQuantity;

//     for (let i = 0; i < allItems.length; i++) {
//       if (name === allItems[i].name) {
//         allItems[i].quantity += number;
//         updatedQuantity = allItems[i].quantity;
//       }
//     }

//     return `Milk quantity was updated. New quantity is ${updatedQuantity}`;
//   },
//   decreaseQuantity(name, number) {
//     const allItems = this.items;
//     let updatedQuantity;

//     for (let i = 0; i < allItems.length; i++) {
//       if (name === allItems[i].name) {
//         if (number > allItems[i].quantity) {
//           return "You can't change this quantity";
//         }
//         allItems[i].quantity -= number;
//         updatedQuantity = allItems[i].quantity;
//       }
//     }

//     if (!updatedQuantity) {
//       return "This product was not found";
//     }

//     return `Milk quantity was updated. New quantity is ${updatedQuantity}`;
//   },
// };

// console.table(cart.getItems());

// console.log("add: ", cart.add({ name: "apple", price: 40 }));
// console.log("add: ", cart.add({ name: "apple", price: 40 }));
// console.log("add: ", cart.add({ name: "juice", price: 35 }));
// console.log("add: ", cart.add({ name: "milk", price: 11 }));
// console.log("add: ", cart.add({ name: "beaf", price: 120 }));

// // console.log("incrise", cart.incriseQuantity("apple", 3));

// console.table(cart.getItems());
// // console.log("Total price: ", cart.countTotalPrice());
// // console.log("Total price: ", cart.countTotalPrice());

// // console.log("remove: ", cart.remove("milk"));

// // console.log("Total price: ", cart.countTotalPrice());

// // console.log("Total price: ", cart.countTotalPrice());

// // console.log("decrease", cart.decreaseQuantity("apple", 3));
// // console.log("decrease", cart.decreaseQuantity("beaf", 1));
// // console.table(cart.getItems());
// // console.log("Total price: ", cart.countTotalPrice());

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(({ score }) => score >= HIGH_SCORE);
// const worst = students.filter(({ score }) => score < LOW_SCORE);
// const average = students.filter(
//   ({ score }) => score < HIGH_SCORE && score >= LOW_SCORE
// );
// console.log("best: ", best);
// console.log("worst: ", worst);
// console.log("average: ", average);

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// });

// console.log(total);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) => {
//   return tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);
// };

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const allTags = getTags(tweets);
// console.log("allTags: ", allTags);

// const countTags = allTags.reduce(getTagStats, {});
// console.log("countTags: ", countTags);

// console.log("tags: ", getTags(tweets));

// // const scores = [27, 2, 41, 4, 7, 3, 75];
// // scores.sort((a, b) => b - a);
// // console.log(scores);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const scores = students.map((item) => item.score);
// console.log("scores: ", scores);

// const sortedScores = [...scores].sort((a, b) => a - b);
// console.log("sortedScores: ", sortedScores);

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   secondStudent.name.localeCompare(firstStudent.name)
// );

// console.log("inDescendingScoreOrder: ", inDescendingScoreOrder);
// console.log("inAscendingScoreOrder: ", inAscendingScoreOrder);
// console.log("inAlphabeticalOrder: ", inAlphabeticalOrder);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", (pizzaName) => {
//   console.log(`Eating pizza ${pizzaName}`);
// });

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName) {},
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
