const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { name, email, service_id, date, img, price, _id, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-12 h-12">
              {img && <img src={img} alt="Avatar" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn btn-success">Confirmed</button>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
