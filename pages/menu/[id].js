import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar"
import Cardapio from "../../components/Cardapio"

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: "1"
      }
    }, {
      params: {
        id: "2"
      }
    }],
    fallback: true
  }
}


export async function getStaticProps(context) {
  const id = context.params.id;
  
  return {
    props: {
      id: id
    }
  }
}

export default function Menu() {  
  return (
    <>
      <Navbar />
      <Cardapio />
    </>
  )
}