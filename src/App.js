import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)

      if (data.results.length) {
        setData(data.results)
      } else {
        setMessage('No results found')
      }
    }

    if(search) fetchData()
  }, [search])

  const handleSubmit = async (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
        <SearchBar handleSubmit={handleSubmit} />
        {message}
        <Gallery data={data}/>
    </div>
  )
}

export default App