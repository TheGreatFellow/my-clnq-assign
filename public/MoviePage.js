import React, { useState, useEffect, useRef } from 'react'
import { Card } from './Card'

export const MoviePage = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [file, setFile] = useState('PAGE1.json')
    const loaderRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '20px',
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
            })
    }, [page])

    const handleObserver = (entries) => {
        const target = entries[0]
        if (target.isIntersecting) {
            setPage((prevPage) => prevPage + 1)
            setFile('PAGE' + page + '.json')
        }
    }
    return (
        <div className='grid grid-cols-3 gap-3 justify-items-center bg-stone-950'>
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
