import { Card, Container, Row, Col } from 'react-bootstrap';

const SearchResult = ({results, query}) => {
   const resultsComponent = results && results.length > 0 ? results.map(
      (data, idx) => (
         <Col md={3} xs={6} key={idx}>
            <ResultItem key={idx} title={data.Title} poster={data.Poster} year={data.Year} />
         </Col>
      )
   ) : <h1>No movie found</h1>
   
   return(
      <div>
         <h2 className="primary-color">
            Search results for '{query}'
         </h2>
         <Container fluid>
            <Row>
               {resultsComponent}
            </Row>
         </Container>
      </div>
   )
}

const ResultItem = ({title, poster, year}) => {
   return (
      <Card>
         <Card.Img variant="top" src={poster} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{year}</Card.Text>
         </Card.Body>
      </Card>
   )
}

export default SearchResult