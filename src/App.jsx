import { useState, useEffect } from 'react'

import { api1 } from "./api"



function App() {
  const [value, setValue] = useState("")

  const [postOffices, setPostOffices] = useState([]);
  const [error, setError] = useState("")



  const HandleFetch = async () => {
    const data = await fetch(`https://api.postalpincode.in/pincode/${value}`)


    const abc = await data.json()


    setPostOffices(abc[0].PostOffice)

  }



  console.log(postOffices)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333' }}>Pincode:{value}</h2>
      <h2 style={{ color: '#555' }} >Message: Number of Pincodes found:{postOffices.length}</h2>
      <h2 style={{ marginBottom: '10px', color: '#777' }}>Enter Pincode</h2>
      <input onChange={(e) =>
        setValue(e.target.value)
      }
        type="text" placeholder="place" style={{
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '95%',
          alignItems: 'center'
        }} />

      <div>
        <button onClick={HandleFetch} style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}> Lookup</button >


        <div className="sty" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {
            postOffices.length > 0 && postOffices.map((val, index) => {
              return (
                <div className='abcd' style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginTop: '10px',
                  padding: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: 'lightgreen',
                  borderRadius: '5px',
                }} key={index}>
                  < div >

                    <p style={{ margin: '5px 0' }} > {val.Name}</p>
                    <p>{val.BranchType}</p>
                    <p>{val.DeliveryStatus}</p>
                    <p>{val.District}</p>
                    <p>{val.Division}</p>
                  </div>
                </div>


              )
            })
          }



        </div >
      </div >
    </div>

  )

}

export default App
