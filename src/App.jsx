import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./MyMain";
import Footer from "./Footer";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />
        <Main />
        <Footer />
    </React.StrictMode>
)