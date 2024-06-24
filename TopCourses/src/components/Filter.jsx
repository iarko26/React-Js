import React from 'react';

function Filter(props) {
  const { filterData, category, setCategory } = props;

  return (
    <div className='filterd'>
      {filterData.map((data) => (
        <button 
          key={data.id} 
          onClick={() => setCategory(data.title)}
          className={category === data.title ? 'active' : ''}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
