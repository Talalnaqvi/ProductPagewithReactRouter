import React from 'react';
import {useParams} from 'react-router-dom'
import { Link,NavLink } from 'react-router-dom';
const UserComponent = () => {
    const  params = useParams();
    const {name,id} = params;
    // const{id} = id;
    console.warn(name);
    return (

<>

<h1> This is USer Information Page using params</h1>
<p>in params we get the access of dynamic data based on the query that is sent to database 
    and then based of parameter that is sent to database information is fetched from database
</p>
<p>lets say we have a user table in db and we want to access the information of that person based on his name,that the 
    name is sent to db and then based on the name we receive the perosnal information, this can be done b using params
</p>
{/* <h1>This is {id} of {name}</h1> */}
<h2>this is{id}</h2>
<h1>This is {name} page</h1>




<li><Link to="/users/1/Talal">Talal</Link></li> 
           <li><Link to="/users/2/Jahanzaib">Jahanzaib</Link></li>
           {/* <li><Link to="/users/id/name">ID</Link></li> */}

        
</>






    );
};
export default UserComponent; 