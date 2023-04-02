import placeholder from './assets/placeholder.png'
export const Card = ({ owner, imageUrl }) => {
    const handleImageError = (event) => {
        event.target.src = placeholder
    }
    return (
        <div className='w-full rounded overflow-hidden m-2'>
            <img
                className='w-full  object-center'
                src={require('./assets/' + imageUrl)}
                alt='alt'
                onError={handleImageError}
            />
            <div className='px-0 pt-2'>
                <div className='font-regular text-base mb-2 truncate w-full'>
                    {owner}
                </div>
            </div>
        </div>
    )
}
