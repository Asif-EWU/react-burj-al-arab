import React, { useEffect, useState } from 'react';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);

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