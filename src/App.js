import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App(){
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
      const response = await fetch(url)
      const data = await response.json()
      

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
      {message}
        <Router>
          <Routes>
            <Route path='/' element={
              <div>
                <SearchBar handleSubmit={handleSubmit} />
                <Gallery data={data}/>
              </div>
            } />
            <Route path='/album/:id' element={<AlbumView />} />
            <Route path='/artist/:id' element={<ArtistView />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;