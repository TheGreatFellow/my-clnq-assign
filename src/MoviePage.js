import React, { useState, useEffect, useRef } from 'react'
import { Card } from './Card'

export const MoviePage = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(0)
    const [file, setFile] = useState('CONTENTLISTINGPAGE-PAGE1.json')
    const loaderRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '400px',
            threshold: 1.0,
        })

        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [loaderRef])

    useEffect(() => {
        fetch(file + '')
            .then((res) => res.json())
            .then((data) => {
                const formatedData = data['page']['content-items']['content']
                setMovies((prevMovies) => [...prevMovies, ...formatedData])
                console.log('Page: ' + page)
                setFile('CONTENTLISTINGPAGE-PAGE' + page + '.json')
            })
    }, [page])

    const handleObserver = (entries) => {
        const target = entries[0]
        if (target.isIntersecting) {
            setPage((prevPage) => prevPage + 1)
        }
    }
    return (
        <div className='grid grid-cols-3 gap-3 mt-5 justify-items-center bg-stone-950'>
            {movies.map((image, index) => {
                return (
                    <Card
                        owner={image['name']}
                        imageUrl={image['poster-image']}
                        key={index}
                    />
                )
            })}
            <div ref={loaderRef}></div>
        </div>
    )
}
