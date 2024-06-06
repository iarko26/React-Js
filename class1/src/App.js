
import './App.css';
import Produuct from './Component/Product';
import ProductDate  from './Component/ProductDate';
import Card from './Component/Card';


function App() {
  const reponse=[
    {
      name:"car",
      day:"20",
      month:"june",
      year:"2021"
    },
    {
      name:"bike",
      day:"21",
      month:"july",
      year:"2022"
    },
    {
      name:"truck",
      day:"24",
      month:"August",
      year:"2023"
    }
  ]
  return (
  <div>
  <Card>
  <Produuct name={reponse[0].name}> This is my first Product</Produuct>
  <ProductDate day={reponse[0].day} month={reponse[0].month} year={reponse[0].month}></ProductDate>

  <Produuct name={reponse[1].name}></Produuct>
  <ProductDate day={reponse[1].day} month={reponse[1].month} year={reponse[1].year}></ProductDate>

  <Produuct name={reponse[2].name}></Produuct>
  <ProductDate day={reponse[2].day} month={reponse[2].month} year={reponse[2].year}></ProductDate>
    <div className="App">




<h1>My First React App</h1>




    </div>
  </Card>

  </div>
  
  );
}

export default App;
