import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name, username, email} = user

    const useStyle ={
        border:'2px solid green',
        borderRedius: '20px',
        padding:'20px',
        margin: '10px'

    }

    return (
        <div style={useStyle}>
            <h2>Name: {name}</h2>
            <p>UserNAme: {username}</p>
            <small>{email}</small>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;