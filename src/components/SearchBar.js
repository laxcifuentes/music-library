import { useState } from 'react'

function SearchBar({ handleSubmit }) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter artist name here' />
            <input type='submit'/>
        </form>
    )
}

export default SearchBar