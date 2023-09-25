export default function Card(props) {
  return (
    <>
            <div className="card mb-3">
                <img src="https://www.designi.com.br/images/preview/10011826.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">Desfrute da harmonia perfeita entre calabresa suculenta, cebolas crocantes e queijo derretido. Massa fina e sabor inigualável, remetendo às tradicionais pizzarias italianas. Transforme sua noite com esta delícia. Peça já! 🍕</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="card-text text-success fw-bold mb-0">R$ {props.price}</p>
                    <span className="badge bg-dark">Adicionar</span>
                  </div>
                </div>
              </div>
              
    </>
  )
}