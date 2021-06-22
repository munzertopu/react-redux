import React, { useState } from "react";
// import Plot from 'react-plotly.js';
import { CSVReader } from "react-papaparse";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);
const buttonRef = React.createRef();
var x1 = [];
var x2 = [];
for (var i = 0; i < 500; i++) {
  x1[i] = Math.random();
  x2[i] = Math.random();
}

var trace1 = {
  x: x1,
  type: "histogram",
};
var trace2 = {
  x: x2,
  type: "histogram",
};
var dataHistogramA = [trace1, trace2];
var layout = { barmode: "stack" };

const CSVManupulation = () => {
  const [dataArr, setDataArr] = useState([]);
  const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);
  const [instances, setInstances] = useState([]);
  const [target, setTarget] = useState([]);
  const [historyTraceInstance, setHistoryTraceInstance] = useState({
  
  });
  const [historyTraceTarget, setHistoryTraceTarget] = useState({
   
  });

  
  const [dataHistogram, setDataHistogram] = useState([]);
  const [x, setX] = useState([1, 2, 3]);
  const [y, setY] = useState([2, 6, 3]);

  const renderHeader = header.map((head) => {
    return (
      <React.Fragment key={head}>
        <th>{head}</th>
      </React.Fragment>
    );
  });
  const renderRow = data.map((row, i) => {
    return (
      <React.Fragment key={i}>
        <tr>
          {row.map((o, j) => {
            return <td key={j}>{o}</td>;
          })}
        </tr>
      </React.Fragment>
    );
  });

  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };
  // const handleOnFileLoad = (data) => {
  //   console.log("---------------------------");
  //   console.log(data);
  //   console.log("---------------------------");
  // };
  const handleOnFileLoad = (csvData) => {
    const csvActualData = [];

    // for (let row in csvData) {
    //   console.log('row data', csvData[row])
    //   csvData[row]["data"].length && csvActualData.push(csvData[row]["data"])
    //   // console.log(csvData[row]["data"])
    // }
    for (let i = 0; i < csvData.length; i++) {
      if (csvData[i]["data"].length) {
        csvActualData.push(csvData[i]["data"]);
      }
    }

    setHeader(csvActualData[0]);
    csvActualData.shift();
    // console.log("csv actual data", csvActualData);
    setData(csvActualData);

    //   setDataArr(arr)s
    //  setHeader(data[0].data)
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    // console.log(data);
    console.log("---------------------------");
  };
  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  const handleInstance = (event) => {
    let value = parseInt(event.target.value);
    let columnOne = [];
    let arrayToSend = [...data];
    arrayToSend.map((row, index) => {
      let singleArr = row;
      singleArr.map((sArr, j) => {
        if (j === value) {
          columnOne.push(sArr);
        }
      });
    });
    console.log("columnOne element", columnOne);
    setInstances(columnOne);
    setHistoryTraceInstance({
      x: columnOne,
      type: "histogram",
    })
  };
  const handleTarget = (event) => {
    let value = parseInt(event.target.value);
    let columnTwo = [];
    let arrayToSend = [...data];
    arrayToSend.map((row, index) => {
      let singleArr = row;
      singleArr.map((sArr, j) => {
        if (j === value) {
          columnTwo.push(sArr);
        }
      });
    });
    console.log("columnTwo element", columnTwo);
    setTarget(columnTwo);
    setHistoryTraceTarget({
      x: columnTwo,
      type: "histogram",
    })
    // setDataHistogram([historyTraceInstance,historyTraceTarget])
    //  let x =[2, 3, 4, 5];
    //  let y=[16, 5, 11, 9]
    //   setX(x)
    //   setY(y)
  };

  // console.log("data array", data);
  // console.log("data array header", header);
  console.log('data history gram', dataHistogram)
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor="#659cef"
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader> */}
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <button
              type="button"
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: "40%",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Choose file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: "60%",
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>

      <div className="row">
        <div className="col-3">
          Instance
          <select
            onChange={handleInstance}
            className="form-select"
            aria-label="Default select example"
          >
            {header.map((o, j) => {
              return (
                <option key={j} value={j}>
                  {o}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-3">
          Target
          <select
            onChange={handleTarget}
            className="form-select"
            aria-label="Default select example"
          >
            {header.map((o, j) => {
              return (
                <option key={j} value={j}>
                  {o}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <Plot
        data={[
          {
            x: instances,
            y: target,
            mode: "lines",
            type: "scatter",

            marker: { color: "red" },
          },
          // { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 900, height: 500, title: "A Scatter Plot" }}
      />
      <Plot data={[historyTraceInstance, historyTraceTarget]} layout={layout} />

      <table className="ui celled table">
        <thead>
          <tr>{renderHeader}</tr>
        </thead>
        <tbody>{renderRow}</tbody>
      </table>
    </div>
  );
};

export default CSVManupulation;
