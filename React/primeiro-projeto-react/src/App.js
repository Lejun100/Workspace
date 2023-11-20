
import Cabecalho from './components/Cabecalho';
import Principal from './components/Principal';
import Rodape from './components/Rodape';
function App() {
  return (
    <div className="App" style={{backgroundColor: '#ffa500'}}>
      <Cabecalho/>
      <Principal/>
      <Rodape/>
    </div>
  );
}

export default App;