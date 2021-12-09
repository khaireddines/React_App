import React from 'react'
import Counter from '../../Components/Counter/Counter'
import { Tasks } from '../../Components/CrudInSyncedState/Tasks'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Stars from '../../Components/Stars/Stars'
import {Route, Routes} from 'react-router-dom';

const MainApp = () => {
    return (
        <Routes>
            <Route path={'/searchbar/*'} element={<SearchBar />} />
            <Route path={'stars'} element={<Stars />} />
            <Route path={'counter'} element={<Counter />} />
            <Route path={'tasks'} element={<Tasks />} />
        </Routes>
    )
}

export default MainApp
// {/* <SearchBar /> */}
//{/* <Stars />  */}
//{/* <Counter /> */}
//{/* <Tasks /> */}