import  { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getEmployess } from './server/api';
import { setEmployee } from './Redux/features/Employee/EmployeeSlice';
import { useDispatch } from 'react-redux';

function Layout() {
  const [loading , setLoading] = useState(false);
  
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    getEmployess().then((data) => {
      dispatch(setEmployee(data))
    }).
    catch((err) => {
      console.log(err)
    }).
    finally(() => {
      setLoading(false)
    })

  } , [dispatch])
  return (
    <main className='flex h-screen'>
    <div className='w-full '>
    {loading?<h1>Loading...</h1>:<Outlet/>}
    </div>
   </main>
  )
}

export default Layout