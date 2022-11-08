import { useState } from "react";
import axios from "axios";
const App = () => {
const defSizeW = 200;
const defSizeH = 200;
  const [width,setWidth] = useState(defSizeW);
  const [height,setHeight] = useState(defSizeW);
  const [data,setData] = useState("");
  const [img,setImg] = useState("");
  // var img = "";

  const handleClick = (e) =>{
    e.preventDefault();
    console.log(width);
    console.log(height);
    console.log(data);
      axios.post(`https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${data}`)
      .then(res => {
        console.log(res);
        setImg(res.config.url)
        // setImg(res.data)
      });

      
  }
  
  return (
    <div className="container mt-3">
      <h1 className="text-muted">QR Code Generator</h1>
      <div className="row">
        <div className="col-md-5">
            <form>
              <div className="row">

                <div className="col-md-2">
                  <div className="mb-3">
                    <label htmlFor="width" className="form-label">Width</label>
                    <input type="text" className="form-control" id="width" name="width" value={width} onChange={(e) => setWidth(e.target.value)}/>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="mb-3">
                    <label htmlFor="height" className="form-label">Height</label>
                    <input type="text" className="form-control" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)}/>
                  </div>
                </div>

              </div>

                <div className="mb-3">
                  <label htmlFor="data" className="form-label">Text </label>
                  <input type="text" className="form-control" id="data" name="data" value={data} onChange={(e) => setData(e.target.value)}/>
                </div>

              <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
          </form>
        </div>


        <div className="col-md-5 mt-2">
          <img src={img ? img : "./logo192.png"} width={width ? width : defSizeW } height={height ? height: defSizeH }/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
