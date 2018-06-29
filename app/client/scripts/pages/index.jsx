// 標準套建
import React from "react";
import ReactDOM from "react-dom";

// 介面模組
import Content from "./modules/content";
import Header from "./modules/header";
import Footer from "./modules/footer";

// 全局樣式
import "assets/styles/index.scss";

// LAYERS，層級
// 每個層級對應一的模組，並將此模組登記於應用程式的唯一化介面中。

ReactDOM.render(
    <Content/>,
    document.getElementById("content")
);

ReactDOM.render(
    <Header/>,
    document.getElementById("header")
);

ReactDOM.render(
    <Footer/>,
    document.getElementById("footer")
);

// Connection to socket.io
import io from "socket.io-client";
const socket = io("http://localhost:8080");
socket.on("news", (data) => {
    console.log(data);
    socket.emit("frontend call", {frontend: "call backend"});
});
