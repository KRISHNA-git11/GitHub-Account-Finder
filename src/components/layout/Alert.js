// import React, { useContext } from 'react'
// import AlertContext from '../context/alert/alertContext'

// const Alert = () => {
//     const alertContext = useContext(AlertContext)
//     const { alert }  = alertContext;
//     return (
//         alert !== null &&(
//             <div className={`alert alert-${alert.type}`}>
//                 <i className="fas fa-info-circle"/> {alert.msg}
//             </div> 
//         )
//     )
// }

// export default Alert

import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    alerts !== null && (
      <div className={`alert alert-${alerts.type}`}>
        <i className='fas fa-info-circle' /> {alerts.msg}
      </div>
    )
  );
};

export default Alert;