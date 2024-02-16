const customers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
  { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
  { id: 3, name: 'Mark', email: 'mark@example.com', location: { city: 'Lille', country: 'France' } },
  { id: 4, name: 'Alvin', email: 'alvin@example.com', location: { city: 'Manhattan', country: 'USA' } },
  { id: 5, name: 'John', email: 'john@example.com', location: { city: 'Marceille', country: 'France' } },
  { id: 6, name: 'Tim', email: 'tim@example.com', location: { city: 'Madrid', country: 'Spain' } },
  // more customers...
];

const orders = [
  { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
  { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 300 },
  { orderId: 103, customerId: 3, product: 'Book', quantity: 3, price: 900 },
  { orderId: 104, customerId: 4, product: 'Keyboard', quantity: 1, price: 450 }
  // more orders...
];


// Task One - Customer Email List: Use map to create an array of all customer emails.

const email_list = customers.map(customer => customer.email);
console.log(email_list);


// Task two - High-Value Orders: Use filter to find all orders with a total value (quantity * price) greater than $1000.

const filtered_orders = orders.filter(order => (order.quantity * order.price) > 1000);
console.log(filtered_orders);


// Task three - Find Customer by Name: Use find to retrieve the customer object for a customer named "Alice".

const customer_alice = customers.find(customer => customer.name === 'Alice');
console.log(customer_alice);


// Task four - Index of a Specific Order: Use findIndex to find the index of the order with orderId 102.

const order_102 = orders.findIndex(order => order.orderId === 102);
console.log(order_102);


// Task five - Check for Orders in a Specific Country: Use some to check if there are any orders from customers located in "USA".

const orders_usa = orders.some(order => order.customerId === customers.find(cs => cs.location.country === 'USA').id );
console.log(orders_usa);


// Task six - Print Order Summaries: Use forEach to print a summary for each order in the format "Order [orderId] by [customerName]: [quantity] x [product] for $[price] each."

orders.forEach(order => {
  const customerName = customers.find(cs => cs.id === order.customerId).name;
  console.log('Order ' + order.orderId + ' by ' + customerName + 
  ' : ' + order.quantity + ' x ' + order.product + 
  ' for ' + order.price + ' each ');
})


// Task seven - Sort Customers by Name: Use sort to create a new array of customers sorted alphabetically by name.

const sorted_customers = customers.sort((cs_a, cs_b) =>
{
  const nameA = cs_a.name.toLowerCase(); // ignore upper and lowercase
  const nameB = cs_b.name.toLowerCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}  
)

console.log(sorted_customers);
