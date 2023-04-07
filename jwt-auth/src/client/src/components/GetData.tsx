import DataService from "@services/getData";
import { useEffect, useState } from "react";

export default function GetData() {
  const [state, setState] = useState({});
  // const resp = await DataService();
  async function handleClick() {
    const data = await DataService();
    setState(data);
  }

  // useEffect(() => {
  //   async function getData() {
  //     const data = await DataService();
  //     setState(state);
  //   }
  // }, []);

  // console.log(state);
  return (
    <div className="form-el">
      <button onClick={handleClick}>Get Data</button>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
}
