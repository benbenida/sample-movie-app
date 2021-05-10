// Modules
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'

// Components
import Sidebar from './components/Sidebar'
import SearchResult from './components/SearchResult'
import SearchForm from './components/SearchForm'
import RSidebar from './components/RSidebar'

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
    axios.get(`http://www.omdbapi.com/?s=${query}&apiKey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&page=1`)
      .then(res => {
        setResults(res.data.Search)
      })
  }
  return (
    <div className="App">
      <Router>
        <Container>
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>
            <Col xs={8}>
              <main>
                <Switch>
                  <Route path={`/search/${query}`}>
                    <SearchResult results={results} query={query} />
                  </Route>
                  <Route path="/">
                    <h1>Homepage/Landing</h1>
                    <p>sample text</p>
                  </Route>
                </Switch>
              </main>
            </Col>
            <Col xs={2}>
              <RSidebar>
                <SearchForm 
                query={query}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </RSidebar>
            </Col>
          </Row>
        </Container>
      </Router>
      
    </div>
  )
}

export default App;