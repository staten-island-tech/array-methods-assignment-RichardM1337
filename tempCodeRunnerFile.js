const titans = [
  {
    name: "Ronin",
    abilities: ["Sword Block", "Phase Dash", "Sword Core"],
  },
  {
    name: "Ion",
    abilities: ["Vortex Shield", "Tripwire", "Laser Core"],
  },
  {
    name: "Scorch",
    abilities: ["Thermal Shield", "Incendiary Trap", "Flame Core"],
  },
  {
    name: "Northstar",
    abilities: ["Tether Trap", "VTOL Hover", "Flight Core"],
  },
];

const titansLength = 1; // this would be changed to check how many objects called "name" there are but i am lazy
function oneLine(arr) {
  for (var i = 0; i < titansLength; i++) {
    console.log(arr.abilities[i] + ","); //iterating through the array lets each item print one at a time
  }
}

const titanSearch = prompt("who u lookin for");

function titanLookup(arr) {
  if (arr.name == titanSearch) {
    return console.log(arr.abilities);
  } else if (arr.name != titanSearch) {
    return console.log("no data");
  }
}

titans.forEach((arr) => console.log(arr.name));
titans.forEach(oneLine);
titans.filter(titanLookup);
titans.forEach((titan) =>
  titan.abilities.forEach((ability) => console.log(ability))
);
