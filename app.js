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
titanSearch = prompt("what titan you lookin for");

titans.forEach((arr) => console.log(arr.name));
const titanFinal = titans.filter((arr) => arr.name === titanSearch);

console.log(titanFinal);

// titans.forEach((arr) => console.log(arr.abilities))
