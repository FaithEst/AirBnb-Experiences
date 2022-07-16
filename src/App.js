import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './components/styles.css';
import data from "./data";

function App() {
  const cardData = data.map(card => {
    return(
      <Card 
      key={card.id}
      item={card}
    />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card--list">
        {cardData}
      </section>
    </>   
  );
}


export default App;
