import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import LoginBlock from "./components/LoginBlock";
import RegistriPage from "./components/RegistriPage";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GamesDitailsBlock from "./components/GamesDitailsBlock";
import CatalogPage from "./components/CatalogPage";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <WelcomeWorld />
      </main>
    </div>
  );
}

export default App;
