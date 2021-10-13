import React, { Component } from 'react'
import UserCell from '../User/Usercell/UserCell';
import { Data } from "./data/Data";
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { data: Data, search: '', criteria: 'name' }
    }
    componentDidMount(){
        if (localStorage.getItem('state')) {
            const LocalState = JSON.parse(localStorage.getItem('state'))
            this.setState(LocalState)
        }
    }
    componentWillUnmount(){
        localStorage.setItem('state',JSON.stringify(this.state))
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState != this.state) {
            localStorage.setItem('state',JSON.stringify(this.state))
        }
    }
    handleSearch = (event) => {
        let SearchValue = event.target.value
        let Criteria = this.state.criteria
        if (SearchValue === '')
            this.setState({ search: event.target.value, data: Data })
        else
            this.setState({
                search: event.target.value,
                data: Data.filter((item, index) => (new RegExp(SearchValue)).test(item[Criteria]))
            })
    }
    render() {
        let { data, search, criteria } = this.state
        return (
            <div style={{ height: '100%' }} >
                <input
                    className={'SearchBox'}
                    value={search}
                    onChange={this.handleSearch}
                    style={{ margin: '10px' }}
                    placeholder='Search Box' />
                <select
                    className={'SearchCriteria'}
                    value={criteria}
                    onChange={(event)=>this.setState({criteria:event.target.value})}
                    >
                        <option value={'name'}>Name</option>
                        <option value={'age'}>Age</option>
                        <option value={'email'}>Email</option>
                        <option value={'phone'}>Phone</option>
                        <option value={'address'}>Address</option>
                        <option value={'balance'}>Balance</option>
                        <option value={'likes'}>Likes</option>
                        <option value={'rating'}>Rating</option>
                </select>
                <UserCell Personnel={data} />
            </div>
        )
    }
}
export default SearchBar;


