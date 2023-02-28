import React from 'react'
l

export default function className="row"() {
  return (
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
  )
}
