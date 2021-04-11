import React from 'react'
import requests from './components/request'
import Header from './components/Header'
import Row from './components/Row'
import Banner from './components/Banner'

function App() {
  return (
    <div>
      <Header />
      <Banner title="Witcher" desc="What a hunter"/>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App
