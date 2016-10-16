export function isSorted(array, comparison) {
  const arrayCopy = Object.assign([], array)
  const sortedArray = arrayCopy.sort(comparison)
  return array.length === sortedArray.length && array.every((element, index) => {return element === sortedArray[index]})
}
