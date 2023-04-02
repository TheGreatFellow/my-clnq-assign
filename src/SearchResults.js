import { Card } from './Card'

export const SearchResults = ({ data }) => {
    return (
        <>
            <div className='grid grid-cols-3 gap-3 mt-5 justify-items-center bg-stone-950'>
                {data.map((image, index) => {
                    return (
                        <Card
                            owner={image['name']}
                            imageUrl={image['poster-image']}
                            key={index}
                        />
                    )
                })}
            </div>
        </>
    )
}
