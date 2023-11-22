console.log("combining data types");

const crayonBox = {
  color: ["red", "blue", "green", "yellow"],
};

console.log(crayonBox.color[0]);

const bottle = {
  cap: {
    material: "metal",
    color: "blue",
  },
};

console.log(bottle.cap.material);
console.log(bottle.cap.color);

const receipt = [
  {
    name: "pizza",
    price: 25,
  },
  {
    name: "pasta",
    price: 20,
  },
];

console.log(receipt[0].name);
console.log(receipt[1].price);

const apartmentBuilding = [["john", "beth", "christian", "chuthulu"]];

console.log(apartmentBuilding[0][1]);
console.log(apartmentBuilding[0][3]);
