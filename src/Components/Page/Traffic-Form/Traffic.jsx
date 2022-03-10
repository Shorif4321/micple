import React from "react";
import "./Traffic.css";

const Traffic = () => {
  return (
    <div className="container mt-5 ">
      {/* ==== Search Bar start === */}
      <div class="mb-3 row d-flex">
        <div className="col-sm-2">
          <label for="" class="searchText col-form-label">
            Searching for
          </label>
        </div>
        <div class="col-sm-10">
          <form class="">
            <input
              class="searchField form-control me-2"
              placeholder="Enter the Company Name, Keyword or Designation"
              type="search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>

      {/* ==== Traffic type start  === */}
      <div className="trafficType d-md-flex mt-5">
        <div className="col-md-5 ">
          <div class="mb-3 row d-flex">
            <div className="col-md-4">
              <label for="" class="searchText me-4 col-form-label">
                Traffic Type
              </label>
            </div>
            <div class="col-sm-8">
              <select
                class="form-select searchField"
                aria-label="Default select example"
              >
                <option selected>Select your Types</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div class="mb-3 row d-flex">
            <div className="col-md-4">
              <label for="" class="searchText">
                Geography
              </label>
            </div>
            <div class="col-md-8">
              <select
                class="form-select searchField"
                aria-label="Default select example"
              >
                <option selected>Any Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ++ Category Start +++  */}

      <div className="trafficType d-md-flex mt-5">
        <div className="col-md-5 ">
          <div class="mb-3 row d-flex">
            <div className="col-md-4">
              <label for="" class="searchText me-4 col-form-label">
                Category
              </label>
            </div>
            <div class="col-sm-8">
              <select
                class="form-select searchField"
                aria-label="Default select example"
              >
                <option selected>Select your Types</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div class="mb-3 row d-flex">
            <div className="col-md-4">
              <label for="" class="searchText  col-form-label">
                Sub Category
              </label>
            </div>

            <div class="col-md-8">
              <select
                class="form-select searchField"
                aria-label="Default select example"
              >
                <option selected>Any Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* +++ Filter Option ++++ */}
      <div className="trafficType d-md-flex mt-5">
        <div className="col-md-5 ">
          <div class="mb-3 row d-flex">
            <div className="col-md-4">
              <label for="" class="searchText me-4 col-form-label">
                Filter
              </label>
            </div>
            <div class="col-sm-8">
              <select
                class="form-select searchField"
                aria-label="Default select example"
              >
                <option selected>Select your Types</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div class="mb-3 row d-flex">
            <div className="col-md-4">
              <label for="" class="searchText">
                CPA Type
              </label>
            </div>
            <div class="col-md-8">
              <select
                class="form-select searchField"
                aria-label="Default select example"
              >
                <option selected>Any Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* +++ Button +++ */}
      <div className="mt-5">
        <button className="apply-button">Apply Search Button</button>
      </div>

      <div className="m-5 p-5"></div>

      {/* === campaign section start ==== */}

      <div className="container">
        <table className="table-box">
          <tr>
            <th>ID</th>
            <th>Campaign Type</th>
            <th>CPA Type</th>
            <th>CPA Rate</th>
            <th>EPC</th>
            <th>Traffic</th>
          </tr>
          <tr>
            <td>Freecode Camp</td>
            <td>Freecode Camp</td>
            <td>Enki</td>
            <td>Enki</td>
            <td>Enki</td>
            <td>Enki</td>
          </tr>
          <tr>
            <td>W3Schools</td>
            <td>Academind</td>
            <td>Programming Hero</td>
          </tr>
          <tr>
            <td>Khan Academy</td>
            <td>The Coding Train</td>
            <td>Solo learn</td>
          </tr>
        </table>

        {/*  <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Campaign Type</th>
              <th scope="col">CPA Type</th>
              <th scope="col">CPA Rate</th>
              <th scope="col">EPC</th>
              <th scope="col">Traffic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1245 <i class="ps-2 fas fa-eye"></i></td>
              <td>National consumer Center - Get a visa card - One Field</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
           
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Traffic;
