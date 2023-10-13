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

const titanSearch = prompt("who u lookin for");

function titanLookup(arr) {
  if (arr.name == titanSearch) {
    return console.log(
      "Searched up Titan has these abilities: " + arr.abilities
    );
  }
}

titans.forEach((arr) => console.log(arr.name));
titans.forEach(
  (titan) => titan.abilities.forEach((ability) => console.log(ability)) //oneline
);
titans.filter(titanLookup); // search
