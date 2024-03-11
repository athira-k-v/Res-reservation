// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import { getAllReservationAPI } from '../services/allAPI';




// function ReserveDetails() {



//     const [allReservation,setAllReservation]=useState([])
//     const getAllReservation = async () => {
//         try {
//           const token = sessionStorage.getItem("token")
//           if (token) {
//             const reqHeader={
//               "Content-Type":"application/json",
//               "Authorization":`Bearer ${token}`     
//             }
          
//           const result=await getAllReservationAPI(reqHeader)
//           if(result.status===200){
//             setAllReservation(result.data);
//           }
//         // console.log(result.data);
//         }
//        } catch (err) {
//           console.log(err);
//         }
//       };
    
//     // console.log(allReservation);
    
//     useEffect(()=>{
//       getAllReservation()
    
//     },[])




//   return (
//     <div>
//   <h1 className='text-center p-2'>Reservation Details</h1>

// <Table striped bordered hover>
  
//       <thead>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Email</th>
//           <th>Seat Number</th>
//           <th>Phone</th>
//         </tr>
//       </thead>
//       <tbody>
//        {
//        allReservation.length>0?allReservation.map((index,all)=>(
//         <tr key={index}>
//         <td>{all.firstName}</td>
//         <td>{all.lastName}</td>
//         <td>{all.date}</td>
//         <td>{all.time}</td>
//         <td>{all.email}</td>
//         <td>{all.seatNumber}</td>
//         <td>{all.phone}</td>
        
//       </tr>
//        )):
//        <div></div>
        
//         }
        
//       </tbody>
//     </Table>


//     </div>
//   )
// }

// export default ReserveDetails




import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllReservationAPI } from '../services/allAPI';

function ReserveDetails() {
  const [allReservation, setAllReservation] = useState([]);

  const getAllReservation = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (token) {
        const reqHeader = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const result = await getAllReservationAPI(reqHeader);
        if (result.status === 200) {
          setAllReservation(result.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllReservation();
  }, []);

  return (
    <div>
      <h1 className='text-center p-2'>Reservation Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Email</th>
            <th>Table Number</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {allReservation.length > 0 ? (
            allReservation.map((all) => (
              <tr key={all.id}>
                <td>{all.firstName}</td>
                <td>{all.lastName}</td>
                <td>{all.date}</td>
                <td>{all.time}</td>
                <td>{all.email}</td>
                <td>{all.seatNumber}</td>
                <td>{all.phone}</td>
              </tr>
            ))
          ) : (
            <div>No reservations found</div>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ReserveDetails;