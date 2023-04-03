import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../components/Header'

test('renders default text when searchState is false', () => {
    const setSearchChange = jest.fn()
    const onSearch = jest.fn()
    const searchState = false

    render(
        <Header
            setSearchChange={setSearchChange}
            onSearch={onSearch}
            searchState={searchState}
        />
    )

    const defaultText = screen.getByText('Romantic Comedy')
    expect(defaultText).toBeInTheDocument()
})

test('renders search input when searchState is true', () => {
    const setSearchChange = jest.fn()
    const onSearch = jest.fn()
    const searchState = true

    render(
        <Header
            setSearchChange={setSearchChange}
            onSearch={onSearch}
            searchState={searchState}
        />
    )

    const searchInput = screen.getByTestId('search-input')
    expect(searchInput).toBeInTheDocument()
})

test('Back button changes SearchState', () => {
    const setSearchChange = jest.fn()
    const onSearch = jest.fn()
    const searchState = true

    render(
        <Header
            setSearchChange={setSearchChange}
            onSearch={onSearch}
            searchState={searchState}
        />
    )

    const backButton = screen.getByTestId('back-button')
    fireEvent.click(backButton)

    expect(setSearchChange).toHaveBeenCalledTimes(1)
    expect(setSearchChange).toHaveBeenCalledWith(false)
})
