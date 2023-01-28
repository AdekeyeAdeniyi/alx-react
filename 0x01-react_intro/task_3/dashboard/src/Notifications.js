import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils';



export function Notification() {
    return (
        <div className='Notifications'>
            <button type='button' onClick={'Close button has been clicked'} aria-label='close' 
                    style={{
                        border: 'none',
                        position: 'absolute',
                        top: '4px',
                        right: 0,
                        cursor: 'pointer'
                    }}>
                <img src={closeIcon} alt="close" widt={16} height={16} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority ='default'> New course available </li>
                <li data-priority ='urgent'> New resume available </li>
                <li data-priority ='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notification;