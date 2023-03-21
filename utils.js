// Calculate size of JSON string in bytes
const sizeInBytes = (obj) => {
  const jsonString = JSON.stringify(obj);
  new Blob([jsonString]).size;
};
