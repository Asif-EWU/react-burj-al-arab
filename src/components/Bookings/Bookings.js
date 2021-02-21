import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [bookings]);

    return (
        <div>
            <h3>You have: {bookings.length}</h3>
            {
                bookings.map(book => 
                    <li>
                        {book.name} 
                        <strong> From:</strong> {(new Date(book.checkIn).toDateString('dd/MM/yyyy'))} 
                        <strong> To:</strong> {(new Date(book.checkOut).toDateString('dd/MM/yyyy'))}
                    </li>
                )
            }
        </div>
    );
};

export default Bookings;