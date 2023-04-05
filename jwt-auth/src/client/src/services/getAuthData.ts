const API_URL = "http://localhost:3000/api/v2";

export default async function getAuthData() {
  const resp = await fetch(API_URL);
  const data = await resp.json();
  // console.log(data);
  return data;
}
