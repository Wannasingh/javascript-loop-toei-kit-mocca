// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

for (const num in restaurants) {
  newRestaurants.push("Restaurant Name: " + restaurants[num]);
}

console.log(newRestaurants);
