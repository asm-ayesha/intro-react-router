import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({userPromise}) => {
   
    const users = use(userPromise)
    console.log('user 2 suspense data load',users)
    return (
        <div>
            <h2>this is user 2</h2>
            <div>
                { 
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;