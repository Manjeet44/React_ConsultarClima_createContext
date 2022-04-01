import AppClima from "./components/AppClima";
import { ClimaProvaider } from "./context/ClimaProvaider";

function App() {

  return (
    <ClimaProvaider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima/>
    </ClimaProvaider>
  )
}

export default App
