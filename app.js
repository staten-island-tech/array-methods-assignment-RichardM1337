const titans = [
  {
    name: "ronin",
    abilities: ["Sword Block", "Phase Dash", "Sword Core"],
  },
  {
    name: "ion",
    abilities: ["Vortex Shield", "Tripwire", "Laser Core"],
  },
  {
    name: "scorch",
    abilities: ["Thermal Shield", "Incendiary Trap", "Flame Core"],
  },
  {
    name: "northstar",
    abilities: ["Tether Trap", "VTOL Hover", "Flight Core"],
  },
];

const titanSearch = prompt("who u lookin for").toLowerCase();

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
