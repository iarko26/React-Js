import React, { useEffect, useState } from 'react';
import { apiUrl, filterData } from './Data';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Loader from './components/Loader';
import Filter from './components/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(apiUrl);
        let result = await response.json();
        console.log("Data fetched:", result);
        setCourses(result.data);
        setLoading(false);
        console.log("Courses fetched:", result.data);
      } catch {
        toast.error('Something went wrong');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='wrapper'>
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      {loading ? <Loader /> : <Cards courses={courses} category={category} />}
      <ToastContainer />
    </div>
  );
}

export default App;
