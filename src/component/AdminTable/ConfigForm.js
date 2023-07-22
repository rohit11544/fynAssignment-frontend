import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPriceConfig } from "../../actions/priceConfig";

export default function ConfigForm() {
  const dispatch = useDispatch();
  const adminName = useSelector((store) => store.adminName);
  const [formData, setFormData] = useState({
    configID: "",
    lowerRange: "",
    upperRange: "",
    price: "",
    dayOfWeek: "",
  });
  const handleCreate = () => {
    dispatch(createPriceConfig(formData));
    setFormData({
      configID: "",
      lowerRange: "",
      upperRange: "",
      price: "",
      dayOfWeek: "",
    });
    console.log("Created by the admin : ", adminName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <>
        {/* Button trigger modal */}
        <div className="p-3">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Create
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create a new Pricing Configuration
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
                      <label htmlFor="exampleInputEmail1">ConfigID</label>
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
                      <label htmlFor="exampleInputPassword1">Lower Range</label>
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
                      <label htmlFor="exampleInputEmail1">UpperRange</label>
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
                      <label htmlFor="exampleInputPassword1">Price</label>
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
                      <label htmlFor="exampleInputEmail1">DayOfWeek</label>
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
                  onClick={handleCreate}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
