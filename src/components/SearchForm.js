const SearchForm = ({handleSubmit, handleChange}) => {
   const inputChange = (e) => handleChange(e.target.value)

   const formSubmit = (e) => {
      e.preventDefault()
      handleSubmit()
   }

   return (
      <form onSubmit={formSubmit}>
         <input type="text" placeholder="Search" onChange={inputChange} />
         <button>Search</button>
      </form>
   )
}

export default SearchForm