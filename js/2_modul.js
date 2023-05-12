// 1 task
// const shoppingList = [];


// function displayShoppingList() {
//   const purchasedItems = [];
//   const unpurchasedItems = [];

//   for (const item of shoppingList) {
//     if (item.purchased) {
//       purchasedItems.push(item);
//     } else {
//       unpurchasedItems.push(item);
//     }
//   }

//   console.log("Unpurchased items:");
//   for (const item of unpurchasedItems) {
//     console.log(item.name, "-", item.quantity);
//   }

//   console.log("Purchased items:");
//   for (const item of purchasedItems) {
//     console.log(item.name, "-", item.quantity);
//   }
// }


// function addPurchase(name, quantity) {
//   for (const item of shoppingList) {
//     if (item.name === name) {
//       item.quantity += quantity;
//       return;
//     }
//   }

//   const newPurchase = {
//     name: name,
//     quantity: quantity,
//     purchased: false
//   };
//   shoppingList.push(newPurchase);
// }


// function purchaseItem(name) {
//   for (const item of shoppingList) {
//     if (item.name === name) {
//       item.purchased = true;
//       return;
//     }
//   }

//   console.log("The item", name, "was not found in the shopping list.");
// }



// addPurchase("Disk", 3);
// addPurchase("Flash drive", 1);
// addPurchase("Soda", 7);
// addPurchase("Banana", 2);

// purchaseItem("Banana");
// displayShoppingList();

// 2 task
// const receipt = [
//   { name: "Soda", quantity: 2, price: 20.5 },
//   { name: "Banana", quantity: 6, price: 10.2 },
//   { name: "Disk", quantity: 2, price: 30.0 },
//   { name: "Flash drive", quantity: 3, price: 120.2 },
// ];


// function displayReceipt() {
//   console.log("Receipt:");
//   for (const item of receipt) {
//     console.log(item.name, "x", item.quantity, "- $", item.price.toFixed(2));
//   }
// }


// function calculateTotal() {
//   let total = 0;
//   for (const item of receipt) {
//     total += item.quantity * item.price;
//   }
//   return total.toFixed(2);
// }


// function getMostExpensivePurchase() {
//   let maxPrice = 0;
//   let mostExpensivePurchase = null;
//   for (const item of receipt) {
//     if (item.price > maxPrice) {
//       maxPrice = item.price;
//       mostExpensivePurchase = item;
//     }
//   }
//   return mostExpensivePurchase;
// }


// function calculateAveragePrice() {
//   let totalQuantity = 0;
//   let totalPrice = 0;
//   for (const item of receipt) {
//     totalQuantity += item.quantity;
//     totalPrice += item.quantity * item.price;
//   }
//   const averagePrice = totalPrice / totalQuantity;
//   return averagePrice.toFixed(2);
// }


// displayReceipt();
// console.log("Total: $", calculateTotal());
// console.log("Most expensive purchase:", getMostExpensivePurchase());
// console.log("Average price per item: $", calculateAveragePrice());

//3 task

// const styles = [
//   { name: "color", value: "violet" },
//   { name: "font-size", value: "100px" },
//   { name: "text-align", value: "center" },
//   { name: "text-decoration", value: "non" },
//   { name: "background-color", value: "grey" },
// ];

// function writeStyledText(styles, text ) {
//   const styleString = styles.map((style) => `${style.name}:${style.value};`).join("");
//   const openingTag = `<p style="${styleString}">`;
//   const closingTag = "</p>";

//   document.write(`${openingTag}${text}${closingTag}`);
//   document.write(`${openingTag}${text2}${closingTag}`);
// }



// const text = "Step! Step! And one more step!";
// const text2 = "If you fall, get up and keep moving forward, even if it's very difficult.";

// writeStyledText(styles, text);


//4 task
const academyRooms = [
  { name: "O101", capacity: 15, faculty: "Philological" },
  { name: "N203", capacity: 12, faculty: "Philosophical" },
  { name: "C305", capacity: 20, faculty: "Journalism" },
  { name: "V408", capacity: 18, faculty: "Psychology" },
  { name: "E512", capacity: 10, faculty: "Sociology" },
];


function displayAllRooms() {
  for (let room of academyRooms) {
    console.log("Room:", room.name);
    console.log("Capacity:", room.capacity);
    console.log("Faculty:", room.faculty);
    console.log("-----------------------");
  }
}


function displayRoomsByFaculty(faculty) {
  console.log(`Rooms for ${faculty} faculty:`);
  for (let room of academyRooms) {
    if (room.faculty === faculty) {
      console.log(room.name);
    }
  }
}


function displayRoomsForGroup(group) {
  console.log(`Rooms suitable for the group at ${group.faculty} faculty:`);
  for (let room of academyRooms) {
    if (room.capacity >= group.students && room.faculty === group.faculty) {
      console.log(room.name);
    }
  }
}


function sortRoomsByCapacity() {
  academyRooms.sort((a, b) => a.capacity - b.capacity);
  console.log("Rooms sorted by capacity:");
  for (let room of academyRooms) {
    console.log(room.name);
  }
}


function sortRoomsByName() {
  academyRooms.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Rooms sorted by name:");
  for (let room of academyRooms) {
    console.log(room.name);
  }
}


displayAllRooms();
console.log("-----------------------");
displayRoomsByFaculty("Philological");
console.log("-----------------------");
displayRoomsByFaculty("Philosophical");
console.log("-----------------------");
displayRoomsByFaculty("Journalism");
console.log("-----------------------");
displayRoomsByFaculty("Psychology");
console.log("-----------------------");
displayRoomsByFaculty("Sociology");
console.log("-----------------------");
displayRoomsForGroup({ faculty: "Philological", students:15});
console.log("-----------------------");
displayRoomsForGroup({ faculty: "Philological", students: 12 });
console.log("-----------------------");
displayRoomsForGroup({ faculty: "Journalism", students: 20 });
console.log("-----------------------");
displayRoomsForGroup({ faculty: "Psychology", students: 18 });
console.log("-----------------------");
displayRoomsForGroup({ faculty: "Sociology", students: 10 });
console.log("=======================");
sortRoomsByCapacity();
console.log("-----------------------");
sortRoomsByName();
