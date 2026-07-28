import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <div className='bg-gray-100 h-screen'>
        <Outlet/>
        </div>
    )
}

export default AuthLayout;