import React from "react";
import NavBar from "./components/NavBar";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Welcome to Japan Store!"} />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;
