import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar"
import Cardapio from "../../components/Cardapio"

export default function Menu() {  
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <Navbar />
      <Cardapio id={id}/>
    </>
  )
}