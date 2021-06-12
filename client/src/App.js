import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Pages from './components/MainPage/Pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <DataProvider>
      <Router>
          <Header />
          <div className="App">
            <Pages />
          </div>
          <Footer />

      </Router>
    </DataProvider>
  );
}

export default App;
