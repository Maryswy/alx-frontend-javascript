// This function takes two arguments: 'set' (a Set) and 'startString' (a string).
export default function cleanSet(set, startString) {
  // Checks if 'startString' exists and is of type 'string'.
  if (startString && typeof startString === 'string') {
    // Creates an empty array to store the filtered and modified strings.
    const strings = [];

    // Iterates over each item in the 'set'.
    for (const item of set) {
      // Checks if the current 'item' starts with the 'startString'.
      if (item.startsWith(startString)) {
        // If it does, removes the 'startString' from the 'item' and adds the modified string to the 'strings' array.
        strings.push(item.slice(startString.length));
      }
    }

    // Joins the modified strings in the 'strings' array using a hyphen (-) as the separator.
    return strings.join('-');
  }

  // If 'startString' is not provided or is not of type 'string', it returns an empty string.
  return '';
}
