// Modules
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'

// Components
import Sidebar from './components/Sidebar'
import SearchResult from './components/SearchResult'
import SearchForm from './components/SearchForm'

// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const App = () => {
  const [ results, setResults ] = useState([])
  const [ query, setQuery] = useState('')

  const handleChange = (q) => {
    setQuery(q)
  }

  const handleSubmit = () => {
    axios.get(`http://www.omdbapi.com/?s=${query}&apiKey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`)
      .then(res => {
        setResults(res.data.Search)
      })
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col xs={8}>
            <SearchResult results={results} query={query} />
          </Col>
          <Col>
            <SearchForm 
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;