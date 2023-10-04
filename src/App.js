import Card from './components/Card'
import { Data } from './Data'
function App() {

  const dataShow = Data.map((el,index) =>
    <Card
    key={index}
      img={el.img}
      title={el.title}
      review={el.review}
      price={el.price}
      desc={el.desc}

    />)
  return (<div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap:'10px',
      flexWrap:'wrap'
    }}
  >{dataShow}</div>);
}

export default App;
