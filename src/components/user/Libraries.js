import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Libraries = ({ lid }) => {
  const token = localStorage.getItem("token");
  const [libdata, setLibdata] = useState();
  console.log(lid);
  const myData = async () => {
    const response = await fetch(`http://localhost:8000/library/${lid}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setLibdata(data);
  };

  useEffect(() => {
    myData();
  }, []);

  return (
    <>
      <Link target="_blank" to={libdata && libdata.urlLink}>
        {libdata && libdata.title}
      </Link>
      <br />
    </>
  );
};

export default Libraries;
