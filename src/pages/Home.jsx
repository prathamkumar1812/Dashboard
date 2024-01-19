import { useCallback, useEffect, useState } from 'react'
import {useDispatch ,useSelector } from 'react-redux'
import { searchEmployee } from '../Redux/features/Employee/EmployeeSlice';
import EmployeeCard from '../components/EmployeeCard';

function Home() {
  const [useEmployees, setUseEmployees] = useState([])
  const employees = useSelector(state => state.employees)
  const searchResults = useSelector(state => state.searchResults);
  const dispatch = useDispatch()

 const [searchid, setSearchid] = useState('');

 const handleSearch = useCallback((e) => {
    e.preventDefault();
  dispatch(searchEmployee(searchid));
}, [dispatch, searchid]);
 useEffect(() => {
   setUseEmployees(searchResults.length > 0||searchid? searchResults : employees)  
 } , [searchResults,employees]) 


  return (
   <div className='  flex flex-col mx-3 pt-3 gap-6'>
    <div className='flex justify-between mx-5'>
    <h1 className='text-3xl font-semibold text-blue-500'>AdminDashboard</h1>
     <form className="flex items-center w-[30%]" onSubmit={(e)=>handleSearch(e)}> 
    <div className="relative w-full">
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5" placeholder="Search Employee by id"  value={searchid} onChange={(e)=>{setSearchid(e.target.value)}} />
    </div>
    <button type="submit"  className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Search
    </button>
    </form>
    </div>
   
   <div>
    <h1 className='text-2xl text-center'>Employees({useEmployees.length})</h1>
    <p className='text-xl'>All Employees are listed here:</p>
   </div>
    <div className=' grid  items-end justify-end grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mx-32 lg:gap-6 md:gap-8 gap-5 md:mx-16 mx-5 mt-10'>
    {  useEmployees.length === 0 ? <h1>No Employees</h1> :
        useEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          
        ))
      }
    </div>
   
      
   </div>
  )
}

export default Home