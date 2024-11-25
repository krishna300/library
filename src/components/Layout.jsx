import React from 'react';
import {layoutsData as data} from '../assets/db'

const Layouts = () => {
  return (
    <div className='mx-auto w-[50vw]'>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((layout) => (
          <div key={layout.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{layout.layoutType}</h2>
            <p className="text-gray-600">Pages Created: {layout.pagesCreated}</p>
            <ul className="mt-4">
              {layout.kpis.map((kpi, index) => (
                <li key={index} className="text-gray-800">
                  <strong>{kpi.name}:</strong> {kpi.value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Layouts;
