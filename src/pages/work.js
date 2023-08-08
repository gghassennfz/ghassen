

import "../styles/Home.css"
import '../styles/Work.css'




import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pn, setPn] = useState('');
  const [age, setAge] = useState('');

  const addUser = () => {
    if (name && id && pn && age) {
      const newUser = {
        id: Date.now(),
        name,
        id,
        pn,
        age,
      };
      setUsers([...users, newUser]);
      clearForm();
    }
  };

  const editUser = (userId) => {
    const userToEdit = users.find(user => user.id === userId);
    if (userToEdit) {
      setEditingUserId(userId);
      setName(userToEdit.name);
      setId(userToEdit.id);
      setPn(userToEdit.pn);
      setAge(userToEdit.age);
    }
  };

  const updateUser = () => {
    if (editingUserId !== null) {
      const updatedUsers = users.map(user =>
        user.id === editingUserId
          ? { ...user, name, id, pn, age }
          : user
      );
      setUsers(updatedUsers);
      clearForm();
    }
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    clearForm();
  };

  const clearForm = () => {
    setEditingUserId(null);
    setName('');
    setId('');
    setPn('');
    setAge('');
  };

  return (
    <div className="App">
      <h1>User Page :</h1>
      <div>
        <h2>Add & Edit or Delete User for Covid-19 Test</h2>
        <form>
          <label> Full Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <label>Id:</label>
          <input type="text" value={id} onChange={e => setId(e.target.value)} />
          <label>Email:</label>
          <input type="text" value={pn} onChange={e => setPn(e.target.value)} />
          <label>Age:</label>
          <input type="text" value={age} onChange={e => setAge(e.target.value)} />
          {editingUserId !== null ? (
            <button type="button" onClick={updateUser}>Update Patient</button>
          ) : (
            <button type="button" onClick={addUser}>Add Patient</button>
          )}
          <button type="button" onClick={clearForm}>Delete Patient</button>
        </form>
      </div>
      <div>
        <h2>Registred Users:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              NAME    :   {user.name} AGE   :    [{user.age}  years  ] IS    :   ({user.pn})
              <button onClick={() => editUser(user.id)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
