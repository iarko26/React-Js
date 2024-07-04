import { useState } from 'react';

function App() {
  const [formdata, setformdata] = useState({ fname: '', lname: '', email: '', comments:false, candidates:false, offers:false, country:"" ,city:"",pushnotification:""});
  function changehandler(e) {
    const { name, value, type, checked } = e.target;
    setformdata({
      ...formdata,
      [name]: type === 'checkbox' ? checked : value,
      
    });
  }


  function submithandler(e){
    e.preventDefault();
    console.log(formdata);

  }

  return (
    <form className='max-w-lg mx-auto my-10 bg-white shadow-md rounded-lg p-8' onSubmit={submithandler}>
      <div className='mb-6'>
        <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900'>First Name:</label>
        <input type='text' name='fname' placeholder='Enter your name' onChange={changehandler} value={formdata.fname} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
      </div>
      <div className='mb-6'>
        <label htmlFor="lname" className='block mb-2 text-sm font-medium text-gray-900'>Last Name:</label>
        <input type='text' name='lname' placeholder='Enter your name' onChange={changehandler} value={formdata.lname} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
      </div>
      <div className='mb-6'>
        <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email:</label>
        <input type='email' name='email' placeholder='Enter your email' onChange={changehandler} value={formdata.email} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
      </div>
<div className='mb-6'>
      <label htmlFor="country" className='block mb-2 text-sm font-medium text-gray-900'>Country:</label>
      <select name='country' onChange={changehandler} value={formdata.favcar} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
         
          <option value='India'>India</option>
          <option value='Bangladesh'>Bangladesh</option>
          <option value='USA'>USA</option>
          <option value='Australia'>Australia</option>
          <option value='Canada'>Canada</option>
          <option value='UK'>UK</option>


        </select>
</div>
        <div className='mb-6'>
          <label htmlFor='city' className='block mb-2 text-sm font-medium text-gray-900' >City:</label>
          <input type='text' name='city' placeholder='Enter your city' onChange={changehandler} value={formdata.city} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
        </div>

        <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
          <legend className="text-sm font-medium text-gray-900 mb-2">By Email</legend>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="comments" 
                  onChange={changehandler} 
                  checked={formdata.comments} 
                  className="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <label htmlFor="comments" className="text-sm font-medium text-gray-900">Comments</label>
              </div>
              <p className="text-sm text-gray-500 pl-6">Get notified when someone posts a comment on a posting.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="candidates" 
                  onChange={changehandler} 
                  checked={formdata.candidates} 
                  className="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <label htmlFor="candidates" className="text-sm font-medium text-gray-900">Candidates</label>
              </div>
              <p className="text-sm text-gray-500 pl-6">Get notified when a candidates applies for a job</p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="offers" 
                  onChange={changehandler} 
                  checked={formdata.offers} 
                  className="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <label htmlFor="offers" className="text-sm font-medium text-gray-900">Offers</label>
              </div>
              <p className="text-sm text-gray-500 pl-6">Get notified when a candidates accepts and rejects a offer</p>
            </div>
        </fieldset>


        <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
          <legend className="text-sm font-medium text-gray-900 mb-2">Push Notifications</legend>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="pushnotification"
                  id='pushnotification'
                  value="All"
                  onChange={changehandler} 
                  // checked={formdata.pushnotification === 'All'}
                  className="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <label htmlFor="pushnotification" className="text-sm font-medium text-gray-900">All</label>
              </div>
            
            </div>
            <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="pushnotification"
                  id='pushnotification'
                  value="Email"
                  onChange={changehandler} 
                  // checked={formdata.pushnotification === 'Email'}
                  className="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <label htmlFor="pushnotification" className="text-sm font-medium text-gray-900">Email</label>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="pushnotification"
                  id='pushnotification'
                  value="No push notifications"
                  onChange={changehandler} 
                  // checked={formdata.pushnotification === 'No push notifications'}
                  className="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <label htmlFor="pushnotification" className="text-sm font-medium text-gray-900">No push notifications</label>
              </div>
            </div>
        </fieldset>
        <button type='submit' className='bg-blue-500 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-6'>Submit</button>
    </form>
  );
}

export default App;