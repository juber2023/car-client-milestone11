import React, { useEffect, useState } from "react";
import { FcAdvance} from "react-icons/fc";
import { Link } from "react-router-dom";

const Service = () => {
  const [service, SetService] = useState([]);
  useEffect(() => {
    fetch("https://car-server-beige.vercel.app/services")
      .then((res) => res.json())
      .then((data) => SetService(data));
  }, []);
  return (
    <div className="">
      <div className="text-center">
        <p className="text-2xl font-bold text-yellow-500">Service</p>
        <p className="text-5xl font-bold">Our Service Area</p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-5">
        {service.map((s) => {
          return (
            <div key={s._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={s.img}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{s.title}</h2>
                  <div className="flex">
                  <p className="text-yellow-500 font-semibold">
                    Price: ${s.price}
                    </p>
                    <Link to={`/checkout/${s._id}`}><button className="text-3xl"><FcAdvance></FcAdvance></button></Link>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
