// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let i=0; i<restaurants.length; i++){
    console.log(restaurants[i]);
    newRestaurants.push(`Restaurant Name: ${restaurants[i]}`)
}
console.log(newRestaurants);
