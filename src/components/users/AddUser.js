import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddUser = () => {
    let history = useHistory();
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
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3003/users', user);
        history.push('/');
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
                    <button className='btn btn-outline-primary btn-lg'>
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
