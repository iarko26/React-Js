
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { toast } from 'react-toastify';
const  Navbar=(props)=> {
    let isloggedin=props.isloggedin;
    let setloggedin=props.setloggedin;
    let navigate=useNavigate();
    function logout(){
        setloggedin(false);
        navigate('/logout');
        toast.success("Logged out successfully");
    }

    


  return (
    <div className='flex justify-evenly '>
      <Link to='/'  className='flex '>
        <img src={Logo} alt='Logo'  />
        <h1 className='mt-2 font-bold text-lg'>emMEStuDY</h1>
      </Link>
      <nav >
        <ul className='flex flex-row  gap-3'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Contact</Link></li>
            
            
        </ul>
      </nav>
      <div className='flex ml-10 gap-3 '>
       { !isloggedin &&
        <Link to='/login'>
            <button>Login</button>
        </Link>
       }
     { !isloggedin &&
        <Link to='/signup'>
            <button >Signup</button>
     
        </Link>
     }
     {
            isloggedin &&
            <button onClick={logout}>Logout</button>
     }
       { isloggedin &&
        <Link to='/dashboard'>
            <button>Dashboard</button>
        </Link>
       }


      </div>
    </div>
  )
}

export default Navbar
