// Set
console.log("SETS")
const set = new Set()

set.add(1)
set.add("vishal")
set.add(true)

console.log(set)

set.delete(true)

for (const value of set) {
    console.log(value);
}

set.clear()

console.log("this is " + set)

//Map

console.log("MAPS")

const map = new Map()

map.set("age", 21)
map.set("name", "Vishal")

console.log(map)
console.log(map.get("age"))

map.delete("age")
console.log(map)

map.set("age", 21)
map.set("name", "Vinit")

console.log(map)

for (const [key, value] of map) {
    console.log(key, value);
}

console.log(map.size);

map.clear()

console.log(map);