import PaginaInicial from './components/PaginaInicial';
import PaginaSorteio from './components/PaginaSorteio';
import Torneio from './components/Torneio';
import imgfundo from "./assets/img/hogwarts.jpg"
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(0)
  const [valor, setValor] = useState(0)
  const [students, setStudents] = useState([])
  const [torneioTribuxo, setTorneioTribuxo] = useState([])
  const [studentsTorneio, setStudentsTorneio] = useState([])
  const [atual, setAtual] = useState(0)
  const [textButton, setTextButton] = useState("Sortear outro nome")
  

  useEffect(()=>{
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setStudents(response.filter((item)=> item.name !== undefined && item.house !== "" && item.image !== "")))
    .catch((err) => console.log(err))
  }, [])

  const filtragem = (estudantes) =>{
    return estudantes.filter((item) => item !== undefined && item.house !== estudantes[atual].house)
  }
  

  function sortearCalice(){
    setShow(show+1)
    setTorneioTribuxo([...torneioTribuxo, students[atual]])
    setStudentsTorneio([...filtragem(students)])
  }


  function re_sortearCalice(){
    if(torneioTribuxo.length < 3){     
      setValor(valor+1) 
      setAtual()
      setTorneioTribuxo([...torneioTribuxo, studentsTorneio[atual]])
      setStudentsTorneio([...filtragem(studentsTorneio)])
      if(torneioTribuxo.length===2){
        setTextButton("Mostre os campões")
      }
    }else{
      setShow(show+1)
    }
  }


  function reset(){
    setTorneioTribuxo([])
    setStudentsTorneio([])
    setValor(0)
    setShow(0)
    setTextButton("Sortear outro nome")
  }

  return (
    <div className="App">
      <img className="app-img" src={imgfundo} alt=""/>
      <div className="container">
      {
        show === 0 ? <PaginaInicial students={students} setAtual={setAtual} sortearCalice={sortearCalice}/>
        : 
          show === 1 ?
            <PaginaSorteio textButton={textButton} changeValue={re_sortearCalice} nome={torneioTribuxo[valor].name} students={studentsTorneio} setAtual={setAtual}></PaginaSorteio>
        :
          <Torneio reset={reset} campeoesTribuxo={torneioTribuxo}></Torneio>
      }
      </div>
    </div>
  );
}

export default App;
