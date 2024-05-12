import Header from './components/Header/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return ( 
    <>
      <Header />
      <h1 className="App-link">Hello react app </h1>
      <p style={{
        color: 'red',
        backgroundColor: 'grey'
      }}>Content goes here ....</p>
      <hr/>
      <input className="" />
      <Footer />
    </>
  )
}

export default App;