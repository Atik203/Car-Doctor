import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = user?.email;

    const order = {
      name,
      email,
      price,
      date,
      img,
      service_id: _id,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-11/12 mx-auto mb-20">
      <h1 className="mt-10 text-2xl font-bold text-center mb-8">
        Check out Now
      </h1>
      <form onSubmit={handleCheckOut} className="bg-gray-300 p-4">
        <div className="flex flex-col lg:flex-row items-center justify-around mt-2">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Due Amount</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Due Amount"
              defaultValue={"$" + price}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="form-control w-full max-w-5xl mx-auto">
          <label className="label">
            <span className="label-text font-medium">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="Message"
            className="textarea textarea-bordered w-full max-w-5xl h-32"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-5xl mx-auto mt-6 mb-6">
          <button className="btn bg-red-500 text-white hover:text-black">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
