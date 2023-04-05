const API_URL = "http://localhost:3000/api/v1";

export default async function getData() {
  const resp = await fetch(API_URL);
  const data = await resp.json();
  // console.log(resp);
  return data;
}
