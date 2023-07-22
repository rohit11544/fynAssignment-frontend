import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPriceConfig,
  updatePriceConfig,
  deletePriceConfig,
} from "../../actions/priceConfig";
import ConfigForm from "./ConfigForm";

export default function AdminTable() {
  const dispatch = useDispatch();
  const priceConfigs = useSelector((store) => store.priceConfig);
  const adminName = useSelector((store) => store.adminName);
  const [check, setCheck] = useState(true);
  const [formData, setFormData] = useState({
    configID: "",
    lowerRange: "",
    upperRange: "",
    price: "",
    dayOfWeek: "",
  });
  useEffect(() => {
    dispatch(getPriceConfig());
  }, [dispatch, check]);

  const handleUpdate = (id) => {
    const filteredData = priceConfigs.filter((item) => item._id === id)[0];
    setFormData(filteredData);
  };

  const handleFinalUpdate = () => {
    dispatch(updatePriceConfig(formData._id, formData));
    console.log("Updated by the admin : ", adminName);
    setCheck(!check);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDelete = (id) => {
    dispatch(deletePriceConfig(id));
    console.log("Deleted by the admin : ", adminName);
  };

  return (
    <div className="container mt-5">
      <ConfigForm />
      <table className="table">
        <thead>
          <tr>
            <th>ConfigID</th>
            <th>LowerRange</th>
            <th>UpperRange</th>
            <th>Price</th>
            <th>DayOfWeek</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {priceConfigs.map((config) => (
            <tr key={config.id}>
              <td>{config.configID}</td>
              <td>{config.lowerRange}</td>
              <td>{config.upperRange}</td>
              <td>{config.price}</td>
              <td>{config.dayOfWeek}</td>
              <td>
                <button
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(config._id)}
                >
                  Update
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Update Pricing Configuration
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <>
                          <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                ConfigID
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter ConfigID"
                                id="configID"
                                name="configID"
                                value={formData.configID}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Lower Range
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                placeholder="Enter LowerRange"
                                id="lowerRange"
                                name="lowerRange"
                                value={formData.lowerRange}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                UpperRange
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter UpperRange"
                                id="upperRange"
                                name="upperRange"
                                value={formData.upperRange}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Price
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                placeholder="Enter Price"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                DayOfWeek
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter DayOfWeek"
                                id="dayOfWeek"
                                name="dayOfWeek"
                                value={formData.dayOfWeek}
                                onChange={handleChange}
                              />
                            </div>
                          </form>
                        </>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={handleFinalUpdate}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(config._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
