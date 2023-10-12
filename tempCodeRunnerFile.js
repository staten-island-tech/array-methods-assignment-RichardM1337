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

titansLength = 3; // this would be changed to check how many objects called "name" there are but i am lazy
function oneLine(arr) {
  for (var i = 0; i < titansLength; i++) {
    console.log(arr.abilities[i] + ",");
  }
}

titans.forEach((arr) => console.log(arr.name));
titans.forEach(oneLine);
titans;
//titans.forEach((arr) => console.log(...arr.abilities, "\n")); (for all  things on one line)
