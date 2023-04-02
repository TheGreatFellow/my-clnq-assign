import { Header } from './Header'
import { useEffect, useState } from 'react'
import { SearchResults } from './SearchResults'
import { MoviePage } from './MoviePage'
function App() {
    const urls = [
        './CONTENTLISTINGPAGE-PAGE1.json',
        './CONTENTLISTINGPAGE-PAGE2.json',
        './CONTENTLISTINGPAGE-PAGE3.json',
    ]
    let allMovies = []
    const [searchState, setSearchState] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const fetchData = async () => {
        try {
            const responses = await Promise.all(urls.map((url) => fetch(url)))
            const data = await Promise.all(responses.map((res) => res.json()))
            allMovies = data.flatMap(
                (page) => page.page['content-items'].content
            )
        } catch (error) {
            console.error(error)
        }
    }
    fetchData()
    const [filteredData, setFilteredData] = useState(allMovies)

    const handleChildStateChange = (value) => {
        setSearchState(value)
    }
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        // const filtered = allMovies.filter((item) =>
        //     item['name']
        //         .toLowerCase()
        //         .includes(event.target.value.toLowerCase())
        // )
        // setFilteredData(filtered)
        // console.log(filteredData)
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const filtered = allMovies.filter((item) =>
                item['name'].toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredData(filtered)
            console.log(filteredData)
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [searchTerm])
    return (
        <div className='container flex max-w-md '>
            <Header
                onSearch={handleSearch}
                searchState={searchState}
                setSearchChange={handleChildStateChange}
            />
            <div className='container p-4 '>
                {searchState ? (
                    <SearchResults data={filteredData} />
                ) : (
                    <MoviePage />
                )}
            </div>
        </div>
    )
}

export default App
