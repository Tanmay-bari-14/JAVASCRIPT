const map = new Map();

map.set("JS", "JAVASCRIPT");
map.set("PY", "PHTON");
map.set("CPP", "C++");

for (const [key] of map) {
  console.log(key);
}
for (const [key, val] of map) {
  console.log(key, "= " + val);
}

for (const val of map) {
  console.log(val);
}

// MAP => map cannot give you a duplicate value

const countries = new Map();

countries.set("IN", "INDIA");
countries.set("USA", "United States of America");
countries.set("FR", "France");
countries.set("FR", "France");

for (const [key, value] of countries) {
  console.log(key, "stands for " + value);
}
