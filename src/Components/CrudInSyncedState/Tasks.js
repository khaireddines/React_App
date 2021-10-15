import React, { useState } from 'react'
import './Tasks.css'
export const Tasks = ({ }) => {
    const [state, setstate] = useState({
        Form: {
            name: '',
            description: '',
            status: 'New',
            date: '',
            dueDate: '',
            assignedTo: ''
        }
    })
    const handleChange = (event) => {
        let item = event.target
        setstate({Form:{...state.Form,
            [item.name]:item.value
        }})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state.Form);
    }
    let { name, description, status, date, dueDate, assignedTo } = state.Form
    return (
        <div className={'container'}>
            <div className={'tasksCrud'} >
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name={'name'}
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                    />
                    <textarea
                        name={'description'}
                        placeholder='Description'
                        value={description}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name={'assignedTo'}
                        placeholder='Assigned To'
                        value={assignedTo}
                        onChange={handleChange}
                    />
                    <input
                        type='date'
                        name={'dueDate'}
                        placeholder='Due Date'
                        value={dueDate}
                        onChange={handleChange}
                    />
                    <select
                        name={'status'}
                        placeholder='Status'
                        value={status}
                        onChange={handleChange}
                    >
                        <option>New</option>
                        <option>Starting</option>
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Testing</option>
                        <option>Done</option>
                    </select>
                    <input type='submit' />
                </form>
            </div>
            <div className={'tasksList'} >

            </div>
        </div>
    )
}
