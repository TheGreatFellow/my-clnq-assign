import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('renders movie page by default', () => {
    render(<App />)
    const moviePage = screen.getByTestId('movie-page')
    expect(moviePage).toBeInTheDocument()
})
