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

for i in titans.abilities{
  const titansLength=(i.length)
}
function oneLine(arr) {
  for (var i = 0; i < titansLength; i++) {
    console.log(arr.abilities[i] + ",");
  }
}

titans.forEach((arr) => console.log(arr.name));
titans.forEach(oneLine);
//titans.forEach((arr) => console.log(...arr.abilities, "\n")); (for all  things on one line)
