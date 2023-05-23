import React from "react";

import UsersList from "../compenents/UsersList";

const Users = () => {
    const USERS = 
    [{
        id: 'ul', 
        name: 'Max Schwarz', 
        image: 'https://www.pexels.com/photo/sea-landscape-sunset-beach-16619351/',
        places: 3
    }];
    return <UsersList items={USERS}/>;
}

export default Users;