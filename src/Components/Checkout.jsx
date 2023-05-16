import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "./ContextApi";

const Checkout = () => {
    const {user}=useContext(UserContext)
  const service = useLoaderData();
  const {title, _id, price, img}=service
//   console.log(service);

  const handleOrder=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const date=form.date.value;
    const order={
        img,
        name,
        title,
        email,
        date,
        price,
        service:_id
    }
        console.log(order);
        fetch('https://car-server-beige.vercel.app/booking',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Booking successful')
            }
        })
  }
  return (
    <div className="my-10">
            <h1 className="font-bold text-5xl text-center ">Checkout service</h1>
        <form onSubmit={handleOrder} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
          defaultValue={user?.displayName}
          name="name"
        />
      </div>
        <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          placeholder="email"
          className="input input-bordered"
          name="date"
        />
      </div>
        <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
          defaultValue={user?.email}
          name="email"
        />
      </div>
        <div className="form-control">
        <label className="label">
          <span className="label-text">Due amount</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          defaultValue={`$ ${service.price}`}
          readOnly
        />
      </div>
            </div>
            <input className=" btn btn-success w-full mt-10 font-semibold text-xl hover:bg-sky-400" type="submit" value="Order confirm" />
        </form>

    </div>
  );
};

export default Checkout;
