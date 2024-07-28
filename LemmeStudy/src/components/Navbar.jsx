import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { toast } from 'react-toastify';

const Navbar = (props) => {
    let isloggedin = props.isloggedin;
    let setloggedin = props.setloggedin;

    function logout() {
        setloggedin(false);
        toast.success("Logged out successfully");
    }

    return (
        <div className='w-full bg-[#05144C]'>
            <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
                <Link to='/' className='flex'>
                    <img src={Logo} alt='Logo' />
                    <h1 className='ml-2 mt-2 font-bold text-lg text-white'>LEMMESTUDY</h1>
                </Link>
                <nav>
                    <ul className="text-white flex gap-x-6">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/courses" className="hover:underline">Courses</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </nav>
                <div className='flex items-center gap-x-4'>
                    {!isloggedin &&
                        <Link to='/login'>
                            <button className="relative overflow-hidden cursor-pointer py-2 px-4 text-base font-semibold text-yellow-500 border-2 border-yellow-500 rounded-full bg-transparent transition-all duration-300 ease-in-out hover:text-white hover:scale-110 hover:shadow-md hover:bg-yellow-500">
                                Log in
                            </button>
                        </Link>
                    }
                    {!isloggedin &&
                        <Link to='/signup'>
                            <button className="relative overflow-hidden cursor-pointer py-2 px-4 text-base font-semibold text-yellow-500 border-2 border-yellow-500 rounded-full bg-transparent transition-all duration-300 ease-in-out hover:text-white hover:scale-110 hover:shadow-md hover:bg-yellow-500">
                                Signup
                            </button>
                        </Link>
                    }
                    {isloggedin &&
                        <button onClick={logout} className="relative overflow-hidden cursor-pointer py-2 px-4 text-base font-semibold text-yellow-500 border-2 border-yellow-500 rounded-full bg-transparent transition-all duration-300 ease-in-out hover:text-white hover:scale-110 hover:shadow-md hover:bg-yellow-500">
                            Logout
                        </button>
                    }
                    {isloggedin &&
                        <Link to='/dashboard'>
                            <button className="relative overflow-hidden cursor-pointer py-2 px-4 text-base font-semibold text-yellow-500 border-2 border-yellow-500 rounded-full bg-transparent transition-all duration-300 ease-in-out hover:text-white hover:scale-110 hover:shadow-md hover:bg-yellow-500">
                                Dashboard
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
