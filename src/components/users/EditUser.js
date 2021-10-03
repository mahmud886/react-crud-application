import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();

    const [user, setuser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUsers();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push('/');
    };

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setuser(result.data);
    };
    return (
        <div className='container my-5'>
            <h2 className='text-center display-2 py-3'>Add Users</h2>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group pt-3'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Name'
                        name='name'
                        value={name}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='form-group pt-3'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter User Name'
                        name='username'
                        value={username}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='form-group pt-3'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Email'
                        name='email'
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='form-group pt-3'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Phone Number'
                        name='phone'
                        value={phone}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='form-group pt-3'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Website Url'
                        name='website'
                        value={website}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='pt-3 d-grid gap-2 col-12 mx-auto'>
                    <button className='btn btn-outline-warning btn-lg'>
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
