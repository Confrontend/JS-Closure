function dataApi() {
  const data = [];

  function fetchData() {
    data.push(createLargeObject());
  }

  function unsubscribe() {
    data.length = 0;
  }

  return {
    fetchData,
    unsubscribe,
  };
}

const dataFromApi = dataApi();

function createLargeObject() {
  let obj = {};
  for (let i = 0; i < 10000; i++) {
    obj[i] = Math.random().toString(36).substring(2, 15);
  }
  return obj;
}
