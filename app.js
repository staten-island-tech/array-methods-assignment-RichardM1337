const titans = [
  {
    name: "Ronin",
    abilities: ["Sword Block", "Arc Field", "Phase Dash", "Sword Core"],
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

function printName(array) {
  return console.log(array.name);
}
function printElements(array) {
  return console.log(array[0]);
}

titans.forEach(printName);
abilities.forEach(printElements);
