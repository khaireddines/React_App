import React from 'react'
import Counter from '../../Components/Counter/Counter'
import { Tasks } from '../../Components/CrudInSyncedState/Tasks'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Stars from '../../Components/Stars/Stars'

const MainApp = () => {
    return (
        <div style={{height:'100%'}}>
            {/* <Stars />  */}
            {/* <Counter /> */}
            {/* <SearchBar /> */}
            <Tasks />
        </div>
    )
}

export default MainApp
