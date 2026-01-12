import React, { useState } from 'react';



const TodoListApp = ()=>{
    const [users, setUser] = useState([{
        name: "Goutam"
    }])

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <h1>Todo List Application</h1>
            <div>
                <input type="text" placeholder='Enter Name' id='nameInput' onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={()=>{
                    const nameInput = document.getElementById('nameInput');
                    const newUser = { name: nameInput.value };
                    setUser([...users, newUser]);
                    nameInput.value = '';
                }}>Add User1</button>
            </div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoListApp;