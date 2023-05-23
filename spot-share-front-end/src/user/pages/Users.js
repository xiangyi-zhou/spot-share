import React from "react";

import UsersList from "../compenents/UsersList";

const Users = () => {
    const USERS = 
    [{
        id: 'ul', 
        name: 'Max Schwarz', 
        image: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
        places: 3
    }];
    return <UsersList items={USERS}/>;
}

export default Users;