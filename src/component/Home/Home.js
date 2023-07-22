import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPriceConfigEnable,
  updatePriceConfigEnable,
} from "../../actions/priceConfigEnable";
import { calcPrice } from "../../api";

export default function Home() {
  const dispatch = useDispatch();
  const priceConfigEnable = useSelector((store) => store.priceConfigEnable);
  const [check, setCheck] = useState(true);
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();

  // price attributes
  const [price, setPrice] = useState(0);
  const [dbp, setDBP] = useState(0);
  const [dap, setDAP] = useState(0);
  const [tmf, setTMF] = useState(0);
  const [wc, setWC] = useState(0);
  useEffect(() => {
    dispatch(getPriceConfigEnable());
  }, [dispatch, check]);

  const handleEnable = (id) => {
    dispatch(updatePriceConfigEnable(id)).then(() => {
      dispatch(getPriceConfigEnable());
    });
    setCheck(!check);
  };

  const handlePrice = async () => {
    const response = await calcPrice(distance, time);
    setDAP(response.data.priceDAP);
    setDBP(response.data.priceDBP);
    setTMF(response.data.priceTMF);
    setWC(response.data.priceWC);
    setPrice(response.data.totalPrice);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {priceConfigEnable.map((configEnable) => (
            <>
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{configEnable.name}</h5>

                    {configEnable.enable ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEnable(configEnable._id)}
                        >
                          Disable
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleEnable(configEnable._id);
                          }}
                        >
                          Enable
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <h2 className="text-center mt-4">Price Calculator</h2>
      <div className="container mt-5">
        <div className="form-group">
          <label htmlFor="usr">Total Distance Travelled :</label>
          <input
            type="Number"
            className="form-control px-3"
            id="usr"
            placeholder="Distance in km"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Total Ride Time:</label>
          <input
            type="Number"
            className="form-control px-3"
            id="pwd"
            placeholder="Time in minutes"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="button" class="btn btn-success" onClick={handlePrice}>
          {" "}
          Calc Price
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-2 p-3" style={{ width: "400px" }}>
              <h3>DBP : {dbp.toFixed(2)}</h3>
            </div>
            <div className="col-md-3 p-3" style={{ width: "400px" }}>
              <h3>DAP : {dap.toFixed(2)}</h3>
            </div>
            <div className="col-md-3 p-3" style={{ width: "400px" }}>
              <h3>TMF : {tmf.toFixed(2)}</h3>
            </div>
            <div className="col-md-3 p-3" style={{ width: "400px" }}>
              <h3>WC : {wc.toFixed(2)}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-3" style={{ width: "400px" }}>
          <h3>
            <b>Total Price : {price.toFixed(2)}</b>
          </h3>
        </div>
      </div>
    </>
  );
}
