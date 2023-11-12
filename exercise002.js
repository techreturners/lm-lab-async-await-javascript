import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(apiEndPoint) {
  const response = await fetch(apiEndPoint);
  try {
    const json = await response.json();
    console.log(json);
  } catch {
    console.log(error);
  }
}

fetchData(jsonTypicode);
