import React from 'react'
import './AlertItem.css'

const AlertItem = ({name}) => {
    return (
        <div className="alertItem">
            <div className="head">
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default AlertItem
