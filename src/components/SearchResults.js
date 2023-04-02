import { Card } from '../Card'

export const SearchResults = ({ data }) => {
    return (
        <>
            <div className='grid grid-cols-3 gap-3 mt-5 justify-items-center bg-stone-950'>
                {data.map((movie, index) => {
                    return (
                        <Card
                            movieName={movie['name']}
                            posterUrl={movie['poster-image']}
                            key={index}
                        />
                    )
                })}
            </div>
        </>
    )
}
