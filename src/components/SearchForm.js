import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const SearchBox = styled.input`
   padding: .5em 1rem;
   border-radius: 20px;
   border: #ffffffaf 1px solid;
   background-color: #191a1f;
   outline: none;
   color: #ffffffaf;
`

const SearchForm = ({handleSubmit, handleChange, history, query}) => {
   const inputChange = (e) => handleChange(e.target.value)

   const formSubmit = (e) => {
      e.preventDefault()
      handleSubmit()
      history.push(`/search/${query}`) // Redirects the page to /search
   }

   return (
      <form onSubmit={formSubmit}>
         <SearchBox type="text" placeholder="🔍 Search" onChange={inputChange} />
      </form>
   )
}

export default withRouter(SearchForm)