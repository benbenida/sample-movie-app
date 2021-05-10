import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavGroup = styled.div`
   margin-bottom: 1.75em;
   font-size: 1rem;
`

const NavGroupTitle = styled.h3`
   font-size: 1.25rem;
   margin: .95rem auto
`

const Sidebar = () => {
   return (
      <div>
         <h1>Header</h1>
         <div>
            <NavGroup>
            <NavGroupTitle>MENU</NavGroupTitle>
               <NavLink exact to="/" activeClassName="selected" className="d-block sidenav-a" id="home"><i class="fas fa-home"></i> Home</NavLink>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-users"></i> Community</NavLink>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-globe"></i> Discovery</NavLink>
               <NavLink to="/" className="d-block sidenav-a"><i class="far fa-clock"></i> Coming soon</NavLink>
            </NavGroup>

            <NavGroup>
            <NavGroupTitle>Social</NavGroupTitle>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-user-friends"></i> Friends</NavLink>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-handshake"></i> Parties</NavLink>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-photo-video"></i> Media</NavLink>
            </NavGroup>

            <NavGroup>
            <NavGroupTitle>General</NavGroupTitle>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-cog"></i> Settings</NavLink>
               <NavLink to="/" className="d-block sidenav-a"><i class="fas fa-sign-out-alt"></i> Logout</NavLink>
            </NavGroup>
         </div>
      </div>
   )
}

export default Sidebar;