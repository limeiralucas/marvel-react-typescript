import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Card from "./components/card/card";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: "flex" }}>
      <Card
        imageUrl="https://placekitten.com/200/300"
        text="Homem-Gato"
        onClick={() => alert("teste")}
      ></Card>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
