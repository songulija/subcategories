import React from 'react'
import NavigationBar from '../components/NavigationBar'
import SearchForm from '../components/searchForm/SearchForm'

function HomeScreen() {
    return (
        <div>
            <NavigationBar />
            {/* <button onClick={insertCategory}>Insert new Category</button>
            <Button>Yes</Button> */}
            <SearchForm />

        </div>
    )
}

export default HomeScreen
