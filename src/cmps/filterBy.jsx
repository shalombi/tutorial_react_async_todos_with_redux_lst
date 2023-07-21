import React, { useState } from 'react'

export const FilterBy = ({ onChangeFilter }) => {

    const [filterBy, setFilterBy] = useState({ task: '', type: '' })

    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        setFilterBy({ ...filterBy, [field]: value })
        
    }

    return (
        <section className="filter-by">
            {JSON.stringify(filterBy)}

            <form onSubmit={(ev) => onChangeFilter(ev, filterBy)}>
                <input
                    value={filterBy.task}
                    onChange={handleChange}
                    name="task"
                    type="text"
                    
                />
                
                <button>filter</button>
            </form>

        </section>
    )
}
