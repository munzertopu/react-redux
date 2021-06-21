import React, { useState } from 'react'

import { CSVReader } from 'react-papaparse'



const CSVManupulation = () => {
    const [dataArr,setDataArr] = useState([])
    const [header, setHeader] = useState([])

    const renderheader = header.map((head)=> {

        return (
            <React.Fragment>
                  <th>{head}</th>
   
            </React.Fragment>
        )
    })

    const  handleOnDrop = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
        setDataArr(data)
       setHeader(data[0].data)
      }
    
  const    handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
      }
    
    const  handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
      }


      console.log('data array', dataArr[0])
      console.log('data array', header)
    return (
        <div style={{paddingTop:"5rem"}}>
              <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor='#659cef'
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
      <table className="ui celled table">
  <thead>
    <tr>
      {renderheader}
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default CSVManupulation




