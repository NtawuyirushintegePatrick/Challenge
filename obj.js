console.log("Hello")
const item = [ 
{name: 'Bike', price:100}, 
{name: 'TV', price:200}, 
{name: 'Album', price:10}, 
{name: 'Book', price:5}, 
{name: 'Phone', price:500},
{name: 'Computer', price:1000}, ]



const p=item.reduce((name, items) => name = name > items.price ? name : items.price, 0);
console.log(p)

const total=item(0).item(price) + item(1).item(price) + item(2).item(price) + item(3).item(price) + item(4).item(price) + item(5).item(price);
console.log(total)