import DataService from "@services/getAuthData";
import { useEffect, useState } from "react";

export default function GetData() {
  // const resp = await DataService();
  // const [data, setData] = useState({})
  const [state, setState] = useState({});
  function handleClick() {
    DataService().then((res) => {
      setState(res);
    }).catch((_) => console.log("oops getAuthData Failed"));
  }

  useEffect(() => {
    async function getAuthData() {
      const data = await DataService();
      console.log(data);
      setState(data);
    }
  }, []);

  // console.log(state);
  return (
    <div className="form-el">
      <button onClick={handleClick}>Get Auth Data</button>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
}
