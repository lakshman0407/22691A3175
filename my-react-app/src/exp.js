/*
//Filter method
const products = [
  { id: 1, name: "Pen", price: 10, available: true },
  { id: 2, name: "Book", price: 50, available: false },
  { id: 3, name: "Bag", price: 100, available: true },
  { id: 4, name: "Laptop", price: 1000, available: true },
];


function displayItems(){
    const filterProducts = () => {
        return products.filter((item) => 
            item.available && item.price >= 50 && item.price <= 1000);
    };
    return filterProducts();
}


console.log(displayItems());

*/

/*
//Sorting 
const products = [
  { name: "Phone", price: 4500 },
  { name: "TV", price: 3900 },
  { name: "Laptop", price: 4800 }
];

function sortPrice(){
    const filterProducts = () => {
        return products.sort((a,b) => {
            return b.price - a.price;
        });
    }
    return filterProducts();
}
console.log(sortPrice());
*/


const products = [
  { id: 1, name: "Pen", price: 10, available: true },
  { id: 2, name: "Book", price: 50, available: false },
  { id: 3, name: "Bag", price: 100, available: true },
  { id: 4, name: "Laptop", price: 1000, available: true },
];


function sortPrice(){
    const filteredProducts = products.filter((item) => item.available);
    return filteredProducts.sort((a,b) => {
        return b.price - a.price;
    });
};

console.log(sortPrice());