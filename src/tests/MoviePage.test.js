import { render, screen, cleanup } from '@testing-library/react'
import { MoviePage } from '../components/MoviePage'

global.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))
global.IntersectionObserver = IntersectionObserver

// test('true is true', () => {
//     expect(true).toBe(true)
// })

test('renders movie cards', async () => {
    render(<MoviePage />)
    const movieCards = await screen.findAllByTestId('movie-card')
    expect(movieCards.length).toBeGreaterThan(0)
})
