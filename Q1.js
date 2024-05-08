var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];

// Function to calculate total price of each item
function calculateItemTotal(item) {
    return item.price * item.quantity;
}

// Calculate total price of each item and store in a new array
var totalPriceOfEachItem = itemsArray.map(item => {
    return {
        name: item.name,
        totalPrice: calculateItemTotal(item)
    };
});

// Calculate total price of all items
var totalPriceOfAllItems = itemsArray.reduce((total, item) => {
    return total + calculateItemTotal(item);
}, 0);

// Print total price of each item
console.log("Total price of each item:");
totalPriceOfEachItem.forEach(item => {
    console.log(item.name + ": " + item.totalPrice);
});

// Print total price of all items
console.log("Total price of all items: " + totalPriceOfAllItems);
