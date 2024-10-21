import "./App.css";
import city from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: true, km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", newCar: true, km: 32000 },
  ];

  return (
    <div className="App">
      <h1>Seção 3</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
        <img src={city} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Matheus" />
      {/* destructuring */}
      <CarDetails brand="Ford" color="Azul" km={10000} />
      {/* reaproveitamento */}
      <CarDetails brand="VW" color="Vermelho" km={535} />
      <CarDetails brand="Fiat" color="Branco" km={0} />
      {/* loop com array de obj */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* Children */}
      <Container myValue="teste 1">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="Teste 2">
        <p>Este é o conteudo 2</p>
      </Container>
    </div>
  );
}

export default App;
