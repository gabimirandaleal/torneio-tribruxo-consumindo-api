import Sorteio from '../pages/Sorteio';
import { useEffect, useState } from 'react';
import api from "../services"
import {useHistory} from "react-router-dom"
import PaginaInicial from '../pages/PaginaInicial';
import Campeoes from '../pages/Campeoes';
import {Route, Switch } from "react-router-dom"


function Routes(){
    const [show, setShow] = useState(0)
    const [valor, setValor] = useState(0)
    const [students, setStudents] = useState([])
    const [torneioTribuxo, setTorneioTribuxo] = useState([])
    const [studentsTorneio, setStudentsTorneio] = useState([])
    const [atual, setAtual] = useState(0)
    const [textButton, setTextButton] = useState("Sortear outro nome")
    const history = useHistory();
    
  
    useEffect(()=>{
      api.get()
      .then((response) => {
        setStudents(response.data.filter((item)=> item.name !== undefined && item.house !== "" && item.image !== ""))
        
        }).catch((err) => console.log(err))
    }, [])
  
    const filtragem = (estudantes) =>{
      return estudantes.filter((item) => item !== undefined && item.house !== estudantes[atual].house)
    }
    
  
    function sortearCalice(){
      if(show === 0){
          setShow(show+1)
          history.push("/sorteio")
          setTorneioTribuxo([...torneioTribuxo, students[atual]])
          setStudentsTorneio([...filtragem(students)])
      }else{
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
              history.push("/campeoes")

            }
      }
      
    }
  
    function reset(){
      setTorneioTribuxo([])
      setStudentsTorneio([])
      setValor(0)
      history.push("/")
      setShow(0)
      setTextButton("Sortear outro nome")
    }


    return(
        <Switch>
            <Route exact path="/">
                <PaginaInicial students={students} setAtual={setAtual} sortearCalice={sortearCalice}/>
            </Route>
            <Route exact path="/sorteio">
                <Sorteio textButton={textButton} changeValue={sortearCalice} nome={torneioTribuxo[valor]} students={studentsTorneio} setAtual={setAtual}></Sorteio>
            </Route>
            <Route exact path="/campeoes">
                <Campeoes reset={reset} campeoesTribuxo={torneioTribuxo}></Campeoes>
            </Route>
        </Switch>
    )
}

export default Routes;