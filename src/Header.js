import { useState } from 'react'

export const Header = ({ onSearch, setSearchChange, searchState }) => {
    return (
        <div className='h-10 '>
            <div className='h-20 fixed  w-full max-w-md	'>
                <img
                    src={require('./assets/nav_bar.png')}
                    className='bg-img h-20 w-full'
                />
                <div className='header-wrapper w-full h-16 flex flex-row justify-between items-center px-2'>
                    <div className='flex flex-row items-center'>
                        <button onClick={() => setSearchChange(!searchState)}>
                            <img
                                src={require('./assets/Back.png')}
                                className='w-4 h-4 m-2'
                            />
                        </button>
                        {searchState ? (
                            <input
                                type='search'
                                onChange={onSearch}
                                name='search'
                                placeholder='Search Movies'
                                autoCorrect='false'
                                className='bg-black placeholder:text-xl text-xl text-white w-full'
                            />
                        ) : (
                            <div className='text-white font-light text-xl'>
                                Romantic Comedy
                            </div>
                        )}
                    </div>
                    <div className='flex flex-row items-center'>
                        <button onClick={() => setSearchChange(true)}>
                            {!searchState && (
                                <img
                                    src={require('./assets/search.png')}
                                    className='w-5 h-5  m-2'
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
