import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { data } from "autoprefixer";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings?.map((booking) => (
            <BookingRow booking={booking} key={booking._id}></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
