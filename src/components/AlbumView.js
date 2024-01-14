import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavButtons from './NavButtons'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/song/${id}`
            const response = await fetch(url)
            const data = await response.json()

            const songs = data.results.filter(item => item.wrapperType === 'track')
            setAlbumData(songs)
        }

        fetchData()
    }, [id])

const display = albumData.map(song => {
    return <p key={song.trackId}>{song.trackName}</p>
})

    return (
        <div>
            <NavButtons />
            {display}
        </div>
    )
}

export default AlbumView