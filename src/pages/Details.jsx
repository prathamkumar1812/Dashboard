import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEmployee } from '../server/api';
import { IoPerson } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsGeoAltFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";


function Details() {
  const {id}= useParams();
  const [employee, setEmployee] = useState({})
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    getEmployee(id).then((data) => {
      setEmployee(data);
    } ).
    catch((err) => {
      console.log(err)
    }).
    finally(() => {
      setLoading(false)
    })
  }, [id])
  return (
    loading?<h1>Loading...</h1>:
    <div className='w-screen  h-screen pt-2'>
     <div className='mx-5  border-black border shadow-lg rounded-lg overflow-hidden '>
     <h1 className='text-3xl bg-blue-500 text-center'>Employee details</h1>
   
    <div className="p-4  md:text-2xl text-xl flex md:flex-row flex-col gap-5">
       <IoPerson className='text-9xl md:m-0 mx-auto rounded-full bg-gray-300'/>
       <div>
       <div className="mb-4 flex gap-2">
        <label className="text-gray-600">ID: </label>
        <p className="text-gray-800">{employee.id}</p>
      </div>
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">Name: </label>
        <p className="text-gray-800">{employee.name}</p>
      </div>
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">Username: </label>
        <p className="text-gray-800">{employee.username}</p>
      </div>
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">Phone: </label>
        <p className="text-gray-800">{employee.phone}</p>
      </div>
      <div className='mb-4 flex gap-2'>
        <label className="text-gray-600">Email: </label>
        <p className="text-gray-800">{employee.email}</p>
      </div>
       </div>
      
      
    </div>

    <section className=' bg-gray-200 border rounded-lg border-black m-5 p-3'>
      <div className='flex gap-2 items-center md:justify-start justify-center'>
      <h1 className='text-3xl'>Address</h1>
      <FaRegAddressCard className='text-3xl'/>
      </div>
      <div className='p-4 md:text-2xl text-xl'>

      
      <div className="mb-4 flex gap-2 ">
        <label className="text-gray-600 ">Street: </label>
        <span className="text-gray-800">{employee.address?.street}</span>
      </div>
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">City: </label>
        <span className="text-gray-800">{employee.address?.city}</span>
      </div>
      <div className="mb-4 flex gap-2">
      <label className="text-gray-600">Suite: </label>
        <span className="text-gray-800">{employee.address?.suite}</span>
      </div>
      <div className="mb-4 flex gap-2">
      <label className="text-gray-600">zipcode: </label>
        <span className="text-gray-800">{employee.address?.zipcode}</span>
      </div>
      <div className="mb-4 flex gap-2">
        <BsGeoAltFill className='text-gray-600 text-2xl'/>
        <label className="text-gray-600">lat: </label>
        <span className="text-gray-800">{employee.address?.geo.lat}</span>
        <label className="text-gray-600">lng: </label>
        <span className="text-gray-800">{employee.address?.geo.lng}</span>
      </div>
      </div>
    </section>

    <section className=' bg-gray-200 border border-black m-5 p-3'>
    
    <div className='flex gap-1 items-center md:justify-start justify-center'>
    <h1 className='text-3xl'>Company</h1>
      <FaBuilding className='text-3xl'/>
    </div>
     
      <div className='p-4 md:text-2xl text-xl'>

      
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">Name: </label>
        <p className="text-gray-800">{employee.company?.name}</p>
      </div>
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">CatchPhrase: </label>
        <p className="text-gray-800">{employee.company?.catchPhrase}</p>
      </div>
      <div className="mb-4 flex gap-2">
        <label className="text-gray-600">bs: </label>
        <p className="text-gray-800">{employee.company?.bs}</p>
      </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default Details