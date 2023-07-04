// This function takes three arguments: 'length' (number), 'position' (number), and 'value' (number).
export default function createInt8TypedArray(length, position, value) {
  // Creates a new ArrayBuffer object with the specified 'length'.
  const buffer = new ArrayBuffer(length);
  
  // Creates a DataView object using the created 'buffer'.
  // The DataView is used to read and write data to the underlying ArrayBuffer.
  // The second and third arguments of the DataView constructor define the byte offset and byte length respectively.
  const view = new DataView(buffer, 0, length);

  // Checks if the 'position' argument is outside the range of the array.
  if (position >= length) {
    // If the position is outside the range, an error is thrown using 'throw Error()'.
    throw Error('Position outside range');
  }

  // Sets the value at the specified 'position' in the Int8 typed array.
  // The 'setInt8' method of the DataView is used to write a signed 8-bit integer value at the specified byte 'position'.
  view.setInt8(position, value);

  // Returns the created DataView object.
  return view;
}
