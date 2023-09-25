import Card from "./Card"


export default function Cardapio() {


  return (
    <>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Card title="Pizza de catupiry" price="32,21"/>
            <Card title="Pizza de calabresa" price="32,32" />
            <Card title="Pizza de catupiry" price="32,34" />
            <Card title="Pizza de catupiry" price="32,53" />
            <Card title="Pizza de catupiry" price="32,95" />
          </div>
          <div className="col-lg-4">
            <Card title="Pizza de catupiry" price="32,21"/>
            <Card title="Pizza de calabresa" price="32,32" />
            <Card title="Pizza de catupiry" price="32,34" />
            <Card title="Pizza de catupiry" price="32,53" />
            <Card title="Pizza de catupiry" price="32,95" />
          </div>
          <div className="col-lg-4">
            <Card title="Pizza de catupiry" price="32,21"/>
            <Card title="Pizza de calabresa" price="32,32" />
            <Card title="Pizza de catupiry" price="32,34" />
            <Card title="Pizza de catupiry" price="32,53" />
            <Card title="Pizza de catupiry" price="32,95" />
          </div>
        </div>
      </div>
    </>
  )

}