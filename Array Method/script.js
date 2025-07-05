const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

//Filter Method
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filteredItems);

//Map Method
const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames);

//Find Method
const foundItem = items.find((item) => {
    return item.name === 'Book';
})
console.log(foundItem);

//ForEach Method
items.forEach((item) => {
    console.log(item.name);
})

//Some Method
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
});
console.log(hasInexpensiveItems);

//Every Method
const hasExpensiveItems = items.every((item) => {
    return item.price <= 1000
});
console.log(hasExpensiveItems);

//Reduce Method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log(total);

//Include Method
const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(7)
console.log(includesTwo);