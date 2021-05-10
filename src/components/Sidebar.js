import styled from 'styled-components'

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
               <a className="d-block sidenav-a" href='#'>Home</a>
               <a className="d-block sidenav-a" href='#'>Community</a>
               <a className="d-block sidenav-a" href='#'>Discovery</a>
               <a className="d-block sidenav-a" href='#'>Coming soon</a>
            </NavGroup>

            <NavGroup>
            <NavGroupTitle>Social</NavGroupTitle>
               <a className="d-block sidenav-a" href='#'>Friends</a>
               <a className="d-block sidenav-a" href='#'>Parties</a>
               <a className="d-block sidenav-a" href='#'>Media</a>
            </NavGroup>

            <NavGroup>
            <NavGroupTitle>General</NavGroupTitle>
               <a className="d-block sidenav-a" href='#'>Settings</a>
               <a className="d-block sidenav-a" href='#'>Logout</a>
            </NavGroup>
         </div>
      </div>
   )
}

export default Sidebar;