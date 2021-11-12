import "./style.css"
import ItemTorneio from "../../components/ItemTorneio"

function Campeoes({ campeoesTribuxo, reset }) {
    return (
        <div className="container-torneio">
            <h1 className="titulo-campeao">CAMPEÕES TRIBUXO</h1>
            <div className="container-cards">
                {
                    campeoesTribuxo.map((item, index) => (
                        <ItemTorneio key={index} campeao={item} ></ItemTorneio>
                    ))
                }
            </div>
            <button onClick={reset} className="button-tentardenovo">Tentar Novamente</button>
        </div>
    )
}

export default Campeoes;