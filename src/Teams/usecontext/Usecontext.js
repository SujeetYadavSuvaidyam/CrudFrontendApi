import React from 'react'
import { useState, createContext } from 'react'
export const UserContext = createContext('')
const Usecontext = ({ children }) => {
    const [task, settask] = useState([]);
    const [value, setValue] = useState('');
    const [upadate, setupadate] = useState(false);
    const [task_id, settask_id] = useState('');
    return (
        <div>
            <div>
                <UserContext.Provider value={{ task, settask , upadate, setupadate, value, setValue, task_id, settask_id }}>{children}</UserContext.Provider>
            </div>
        </div>
    )
}

export default Usecontext;