import './App.css';
import HomePage from './components/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
function App() {
  console.log(!(window.innerWidth<750),'window')
  return (
  <>
  <main>
  <Header/>
  <HomePage/>
  <Pagination/>
  </main>
  <Footer/>
  </>

  );
}

export default App;
