import React from 'react'
import requests from './components/request'
import Header from './components/Header'
import Row from './components/Row'
import Banner from './components/Banner'
import Footer from './components/footer'
import { Router, Switch, Route} from 'react-router'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      <Footer/>
    </div>
  )
}

export default App
