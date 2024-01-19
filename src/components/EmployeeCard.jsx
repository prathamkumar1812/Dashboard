
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaIdCard } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../Redux/features/Employee/EmployeeSlice';
import { MdEdit } from "react-icons/md";


function EmployeeCard({employee}) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        console.log(employee.id)
        dispatch(deleteEmployee(employee.id))
    }
    
  return (
    <div className="bg-white shadow-lg md:w-[300px] w-[250px] rounded-lg overflow-hidden card mb-5 border border-gray-200 mx-auto pt-4 ">
         <button onClick={handleDelete} className='float-end mr-2'><MdDeleteOutline className='text-red-500  text-2xl'/></button>
         <button  className='float-start ml-2'><MdEdit className='text-gray-500  text-xl'/></button>
         <Link to={`/details/${employee.id}`} > 
      <div className='flex flex-col gap-2 items-center mx-3'>
      <img src='/images.jpeg' alt="avatar" className='w-[100px] rounded-full object-cover'/>
     <h1 className=' text-center text-xl md:text-2xl'>{employee.name}</h1>
     <p className='text-gray-500'>{employee.username}</p>
        </div>  
    
     <div className='m-3  bg-gray-400 flex flex-col rounded-lg p-3 items-start gap-3 '>
      <div className='flex items-center gap-2'>
        <FaIdCard className='text-white text-2xl'/>
        <p>{employee.id}</p>
       </div>
       <div className='flex items-center gap-2'>
        <IoMdMail className='text-white text-2xl'/>
        <p>{employee.email}</p>
       </div>
       <div className='flex items-center gap-2'>
        <MdOutlinePhoneInTalk className='text-white md:text-2xl'/>
        <p>{employee.phone}</p>
       </div>
     </div>
     </Link>  
{/* <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden card">
    <div className="p-4 bg-blue-500 text-white">
      <h2 className="text-xl font-semibold mb-2">Employee Details</h2>
    </div>
    <div className="p-4">
      <div className="mb-4">
        <label className="text-gray-600">ID:</label>
        <span className="text-gray-800">123</span>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Name:</label>
        <span className="text-gray-800">John Doe</span>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Username:</label>
        <span className="text-gray-800">johndoe123</span>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Phone:</label>
        <span className="text-gray-800">123-456-7890</span>
      </div>
      <div>
        <label className="text-gray-600">Email:</label>
        <span className="text-gray-800">john.doe@example.com</span>
      </div>
    </div>
  </div> */}
   </div>
  )
}

export default EmployeeCard