import { Jumbotron } from 'react-bootstrap'

const Community = () => {
   return (
      <div>
         <h3>Community Page</h3>
         <Jumbotron className='community-jumbotron'>
            <h1>Join a community now!</h1>
            <p>Join any community now to interact with other movie goers!</p>
            <button className="btn btn-lg bg-primary">Look for a Community</button>
         </Jumbotron>
      </div>
   )
}

export default Community