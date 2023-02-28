import React from "react";
import React, { useState } from "react";

export default function Form() {
  const [frmDt, setFrmDt] = useState({});

  const handleOnChange = (e) => {
    const {name, vlue} e.target
    console.log(e);

    const data = {
    [name]: value,
    }
  };

  return (border p-3 rounded  shows
    <form actionName="">
      <div class="row mt-3">
        <div class="col-md-6">
          <input
            type="text"
            name="task"
            class="form-control task-input"
            required
            placeholder="Enter a task..."
          />
        </div>

        <div class="col-md-3">
          <input
            type="number"
            name="hr"
            class="form-control hrs-input"
            required
            placeholder="Enter no. of hours..."
          />
        </div>

        <div class="col-md-3 text-center">
          <button class="btn btn-primary" type="submit" id="form-btn">
            <i class="fa-solid fa-plus"></i> Add New Task
          </button>
        </div>
      </div>
    </form>
  );
}
