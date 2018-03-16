const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
<<<<<<< HEAD
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens;
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens;
}
function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function appendKitten(name) {
  return [...kittens, name]
}
function removeFirstKitten() {
  return kittens.slice(1);
}
function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1);
=======
>>>>>>> 1062068e351cf8686b580233f105904f895b0545
}