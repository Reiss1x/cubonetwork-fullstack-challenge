import './App.css';
import { useEffect, useState } from 'react';
import Form, {} from "./components/Form";
import Graph from "./components/Graph"
import Table from './components/Table';
function App() {

  const [data, setData] = useState([])
  const [render, setRender] = useState(false);

    let apiKey = "http://localhost:8080/participant/getAll"

    useEffect(() => {
      const fetchUsers = async () => {
        await fetch (`${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((response) => {
          response.json().then((json) => {
            if(json.length>0){setData(json)}
            console.log(json);
            setRender(false);
          })  
        }).catch(error => {console.log(error)});
      }
      fetchUsers();
    }, [render])

    const handleSubmit = () => {
      setRender(true);
    }

   


 
  return (
    <div>
      <Form onSubmit={handleSubmit}/>
      <div className='info'>
        <h1 className= "data">DATA</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      
      <div className = "table-graph" >
        <Table data={data} className="chart2"/>
        <Graph data={data} className="chart"/>
      </div>   
      
    </div>
  );
}

export default App;
