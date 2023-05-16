import React, { useEffect, useState } from 'react';
import { UserContext } from './ContextApi';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const {user}=useContext(UserContext)
    const [bookings, SetBookings]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`https://car-server-beige.vercel.app/booking?email=${user?.email}`,{
            method:'GET',
            headers:{
                authorization:`bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                SetBookings(data)
            }
            else{navigate('/')}
        })
    },[])

    const handleDelete=id=>{
        const proceed=confirm('Are you sure want to delete?')
        if(proceed){
            fetch(`https://car-server-beige.vercel.app/booking/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('successfully deleted')
                }
                const remaining=bookings.filter(s=>s._id!==id)
                SetBookings(remaining)
            })
        }
    }

    const handleBookingConfirm=id=>{
        const proceed=confirm('Are you sure want to confirm booking?')
        if(proceed){
            fetch(`https://car-server-beige.vercel.app/booking/${id}`,{
                method:'PATCH',
                headers:{'content-type':'application/json'},
                body: JSON.stringify({status:'confirm'})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount>0){
                    alert('successfully confirmed')
                }
                const remaining=bookings.filter(booking=>booking._id!==id)
                const updated=bookings.find(booking=>booking._id===id)
                updated.status='confirm'
                const newBookings=[updated, ...remaining]
                SetBookings(newBookings)

            })
        }
        
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className=''>
        <th>
        </th>
        <th></th>
        <th>Service</th>
        <th>Price</th>
        <th>Date</th>
        <th>email</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            bookings.map(s=>{
                return <tr key={s._id}>
        <th>
        <button onClick={()=>handleDelete(s._id)} className="btn btn-circle btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          
            <div className="avatar">
              <div className="rounded w-24">
                <img src={s.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td className="font-bold">${s.title}</td>
        <td>${s.price}</td>
        <td>{s.date}</td>
        <td>{s.email}</td>
        <th>
            {
                s.status==='confirm'?<p className='text-green-500'>Approved</p>:<button onClick={()=>handleBookingConfirm(s._id)} className="btn btn-ghost btn-xs">Pending</button>
            }
          
        </th>
      </tr>
        
            })
        }
    </tbody>   
  </table>
</div>
        </div>
    );
};

export default Bookings;