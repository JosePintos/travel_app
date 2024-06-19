import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portfolios from './Components/Portfolios/Portfolios'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portfolios/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>

    </div>
  )
}

export default App
