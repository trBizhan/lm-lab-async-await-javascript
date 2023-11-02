import fetch from "node-fetch";

const endPointList = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://swapi.dev/api/planets/3/?format=json",
];

const fetchData = async (endPoint) => {
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

endPointList.forEach(fetchData);
