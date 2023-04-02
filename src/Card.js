import { useEffect, useState } from 'react'
import placeholder from './assets/placeholder.png'
export const Card = ({ movieName, posterUrl }) => {
    const [imageSrc, setImageSrc] = useState('./assets/' + posterUrl)
    const [error, setError] = useState(false)

    const handleImageError = (event) => {
        //handling error 1
        event.target.src = placeholder
    }

    useEffect(() => {
        //handling error 2
        fetch(imageSrc)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Image not found')
                    console.log('Image not found')
                }
                return response.blob()
            })
            .catch(() => {
                setError(true)
                console.log('Image not found')
            })
    }, [])

    return (
        <div className='w-full rounded overflow-hidden m-2'>
            {error ? ( //handling error 3
                <img
                    className='w-full  object-center'
                    src={placeholder}
                    alt='alt'
                    onError={handleImageError}
                />
            ) : (
                <img
                    className='w-full  object-center'
                    src={require(imageSrc + '')}
                    alt='alt'
                    onError={handleImageError}
                />
            )}
            <div className='px-0 pt-2'>
                <div className='font-regular text-base mb-2 truncate w-full'>
                    {movieName}
                </div>
            </div>
        </div>
    )
}
