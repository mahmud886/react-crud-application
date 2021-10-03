import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUsers(result.data.reverse());
        console.log(result);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };
    return (
        <div className='container py-5'>
            <h2 className='text-center display-2 py-3'>All Users Details</h2>

            <table className='table table-striped table-light'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>User Name</th>
                        <th scope='col'>User ID</th>
                        <th scope='col'>User Email</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope='row'>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='btn btn-outline-info'>
                                    View
                                </Link>
                                <Link
                                    className='btn btn-outline-primary mx-1'
                                    to={`/users/edit/${user.id}`}>
                                    Edit
                                </Link>
                                <Link
                                    className='btn btn-outline-danger'
                                    onClick={(user) => deleteUser(user.id)}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
