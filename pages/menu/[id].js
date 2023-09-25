
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar"
import Cardapio from "../../components/Cardapio"

export default function Menu() {  

  const id = "teste"
  return (
    <>
      <Navbar />
      <Cardapio id={id}/>
    </>
  )
}