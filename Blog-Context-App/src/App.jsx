
import React, { useContext, useEffect } from 'react'

import Blogpage from './pages/Blogpage'
import Categorypage from './pages/Categorypage'
import Tagpage from './pages/Tagpage'
import Homepage from './pages/Homepage'
import AppContext from './context/AppContext'
import { Route,Routes,useSearchParams,useLocation } from 'react-router-dom'

function App() {
  const{fetchpost}=useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(()=>{
const page=searchParams.get('page')||1;
if(location.pathname.includes('tags')){
  const tag=location.pathname.split('/').at(-1).replaceAll('-',' ');
  fetchpost(Number(page),tag);

}
else if(location.pathname.includes('categories')){
  const category=location.pathname.split('/').at(-1).replaceAll('-',' ');
  fetchpost(Number(page),null,category);
}
else{
  fetchpost(Number(page));
}
  },[location.pathname,location.search]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center '>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/blog/:blogId' element={<Blogpage/>}/>
  <Route path='/tags/:tag' element={<Tagpage/>}/>
  <Route path='/categories/:category' element={<Categorypage/>}/>

</Routes>
    </div>
  )
}

export default App
