import React from 'react';

function Filter({ filterData }) {
  return (
    <div className='filterd'>
      {filterData.map((data) => (

           <button key={data.id}>{data.title}</button>
    
      ))} 
    </div>
  );
}

export default Filter;
