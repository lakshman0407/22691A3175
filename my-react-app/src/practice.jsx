import {useState, useEffect} from 'react';
function Practice(){

    const [users, setUsers] = useState([]);
    const [search,setSearch] = useState('');

    const fetchUsers =  () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error Fetching Data: ',error));
    };

    useEffect(() => {
        fetchUsers();
    },[])

    const filterUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLocaleLowerCase())
    });
    return(
        <div>
            <h1>User List: </h1>
            <input 
                type='text'
                placeholder='Enter name'
                value={search}
                onChange =  {e => {setSearch(e.target.value)
                console.log('Searching for:', e.target.value);
                }}
            />
            <button onClick={fetchUsers}>Reload Users</button>
            <ul>
                {filterUsers.map((user) => {
                    return(
                    <li key={user.id}>
                        <b>{user.name}</b><br />
                        {user.email}<br />
                        {user.address.city} <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Practice
