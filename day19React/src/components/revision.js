import { useEffect, useState } from "react";
import NavBarR from "./navbarR";

const Revision = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [color, setColor] = useState([]);
  //API CALL
  const getData = async () => {
    console.log("Inside...");
    const req = await fetch(`https://dummyjson.com/products/search?q=${text}`);
    const arr = await req.json();
    console.log(arr);
    setData(arr.products);
  };

  useEffect(() => {
    getData();
  }, [text]);

  handleColorChange = () => {
    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    setColor(`rgb(${num1},${num2},${num3})`);
  };

  // const handleChange =(e) =>{
  //   setText(e.target.value);
  // }
  return (
    <>
      <div onClick={handleColorChange}>
        <NavBarR setText={setText}></NavBarR>
      </div>
      <h2 style={{ backgroundColor: color }}>{text}!</h2>
      {data.map((elem) => {
        return <h3>{elem.title}</h3>;
      })}
      {/* <div>
      <NavBarR setText={setText}/>
    </div> */}
      {/* <h2>{text}!</h2> */}
    </>
  );
};

export default Revision;
