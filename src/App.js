import "./App.css";

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not to-do List</h1>
          </div>
        </div>
        <form action="">
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

        <div class="row mt-5 g-2">
          <div class="col md">
            <h2 class="text-center">Entry List</h2>
            <hr />
            <table class="table table-striped table hover">
              <tbody id="task-list"></tbody>
            </table>
          </div>

          <div class="col md">
            <h2 class="text-center">Bad List</h2>
            <hr />
            <table class="table table-striped table-hover">
              <tbody id="bad-task"></tbody>
            </table>
          </div>
          <div class="text-end fw-bold">
            You can save <span id="totalBadHrs">0</span> Hours
          </div>
        </div>

        <div class="row fw-bold">
          <div class="col">
            The total hours allocated for this week is
            <span id="totalHrs">0</span> Hours
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
