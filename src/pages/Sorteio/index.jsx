import "./style.css"
import imagemCalice from "../../assets/img/calicedefogo.gif"
import imagemPergaminho from "../../assets/img/pergaminho.png"

function Sorteio({ nome, changeValue, textButton, setAtual, students }) {
    setAtual(Math.floor(Math.random() * (Math.ceil(students.length - 1) - Math.floor(1) + 0)) + Math.floor(0))
    return (
        <div className="container-sorteio container-menu">
            <div className="container-calice">
                <img src={imagemCalice} alt="" />
                <div className="pergaminho-container">
                    <img src={imagemPergaminho} alt="" />
                    <p>{nome.name}</p>
                </div>

            </div>
            <button onClick={changeValue}>{textButton}</button>
        </div>
    )
}

export default Sorteio