import Group from "./images/Group.png";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import data from "./data";

function App() {
  console.log(data);

  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <header className="App-header">
        <Navbar />
        <Hero Group={Group} />
        <div className="cards-list">
          <div className="card--list">{cards}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
