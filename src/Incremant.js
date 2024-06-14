import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Increament() {
  const [state, setstate] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter</h1>
          <div className="my-5">
            <h2 className="my-5">{state}</h2>
            <div>
              <button
                className="btn btn-danger mx-3"
                onClick={() => setstate(state - 1)}
              >
                Decreament
              </button>
              <button
                className="btn btn-success mx-3"
                onClick={() => setstate(state + 1)}
              >
                Increament
              </button>
              <button
                className="btn btn-secondary mx-3"
                onClick={() => setstate(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Increament;
