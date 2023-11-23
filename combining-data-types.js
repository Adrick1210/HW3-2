console.log("combining data types");

const crayonBox = {
  color: ["red", "blue", "green", "yellow"],
};

console.log(crayonBox.color[0]);

// logging object values of bottle
const bottle = {
  cap: {
    material: "metal",
    color: "blue",
  },
};

console.log(bottle.cap.material);
console.log(bottle.cap.color);

// logging a object value of receipt
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

// apartment building array
const apartmentBuilding = [["john", "beth", "christian", "chuthulu"]];

console.log(apartmentBuilding[0][1]);
console.log(apartmentBuilding[0][3]);

//======================================================
// Combine objects, arrays, and functions more than one level deep
//======================================================

function knit(item, size) {
  let cloth = {
    item: "scarf",
    size: "6ft",
  };
  return cloth;
}
console.log(knit().item);

// callback to the crayonBox array
const crayonSelector = (crayonBox) => {
  console.log(crayonBox);
};

crayonSelector(crayonBox.color[2]);

// callback option to options function
const options = () => {
  console.log('select a song')
}

const powerButton = (option) => {
  option();
};

powerButton(options);