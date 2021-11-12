import "./style.css"


function PaginaInicial({ setAtual, students, sortearCalice }) {

    setAtual(Math.floor(Math.random() * (Math.ceil(students.length - 1) - Math.floor(0) + 1)) + Math.floor(0))


    return (
        <div className="container-menu">
            <div className="pag-container">
                <h1>Torneio Tribruxo</h1>
                <p>Escolha seus campeões do torneio</p>
                <button onClick={sortearCalice}>Começar!</button>
            </div>
        </div >
    )

}

export default PaginaInicial