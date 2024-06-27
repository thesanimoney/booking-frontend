export default function rearrangeArray(arr: string[], startIndex: number) {
  if (startIndex < 0 || startIndex >= arr.length) {
    throw new Error("Invalid start index");
  }

  const startElement = arr.splice(startIndex, 1)[0];
  arr.unshift(startElement);

  return arr;
}