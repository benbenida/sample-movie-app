import { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const faveMovieIDs = ['tt0109830', 'tt0468569', 'tt4154796']

const NavGroup = styled.div`
   margin-bottom: 1.75em;
   font-size: 1rem;
`

const NavGroupTitle = styled.h3`
   font-size: 1.25rem;
   margin: .95rem auto
`

const fetchMovieById = async (id) => {
   const result = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apiKey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`
   )
   return result.data
}

const RSidebar = (props) => {
   const [ faveMovies, setFaveMovies ] = useState([])
   
   useEffect(() => {
      for (let faveMovieID of faveMovieIDs){
         fetchMovieById(faveMovieID).then(res => {
            return setFaveMovies(prevData => [...prevData, res])
         })
      }
   }, [])

   const faveMovieComponents = faveMovies.length > 0 ? faveMovies.map((movie, idx) => (
      <Row key={idx} className="my-3">
         <Col xs={3}><img src={movie.Poster} height="72" /></Col>
         <Col xs={9}>
            <h6 className="d-block">{movie.Title}</h6>
            <span className="text-muted">{movie.Year}</span>
         </Col>
      </Row>
   )) : []
   
   return (
      <>
         {props.children}
         <NavGroup>
            <NavGroupTitle>Favorites</NavGroupTitle>
               <div>
                  {faveMovieComponents}
               </div>
         </NavGroup>
      </>
      
   )
}

export default RSidebar