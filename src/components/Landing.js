import { Jumbotron, Card, Container, Row, Col } from 'react-bootstrap'

import { bestArtists } from '../static'

const Landing = () => {
   return (
      <>
      <h3>Welcome, user</h3>
      <Jumbotron className="landing-jumbotron">
         <div>
         <h3>Avengers: Endgame</h3>
         <p>
            Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.
         </p>
         </div>
      </Jumbotron>

      <Featuring />
      </>
   )
}

const Featuring = () => {
   const bestArtistsComponents = bestArtists.map((artist) => (
      <Col xs={3}>
         <Card>
            <Card.Body style={{
               backgroundImage: `url(${artist.image})`,
            }}>
               <Card.Title>{artist.name}</Card.Title>
               <Card.Text>+{artist.movies} movies</Card.Text>
            </Card.Body>
         </Card>
      </Col>
   ))
   return (
      <div className="mt-5">
         <Container fluid>
            <Row className="feature-container">
               <h3>Best Actors</h3>
               {bestArtistsComponents}
            </Row>
         </Container>
      </div>
   )
}

export default Landing