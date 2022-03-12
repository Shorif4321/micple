import React, { useEffect, useState } from "react";
import "./Traffic.css";

const Traffic = () => {

  const [trafficTypes, setTrafficTypes] = useState([]);
  const [countrys, setCountrys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sbuCategories, setsubCategories] = useState([]);
  const [cpas, setCpas] = useState([]);
  const [traffics, setTraffics] = useState([]);

  useEffect(() => {
    fetch("./Traffic.JSON")
      .then(res => res.json())
      .then(data => setTrafficTypes(data))
  }, []);

  useEffect(() => {
    fetch("./Country.JSON")
      .then(res => res.json())
      .then(data => setCountrys(data))
  }, []);

  useEffect(() => {
    fetch("./Categories.JSON")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  useEffect(() => {
    fetch("./Subcategorie.JSON")
      .then(res => res.json())
      .then(data => setsubCategories(data))
  }, []);

  useEffect(() => {
    fetch("./Cpa.JSON")
      .then(res => res.json())
      .then(data => setCpas(data))
  }, []);

  useEffect(() => {
    fetch("./Filter.JSON")
      .then(res => res.json())
      .then(data => setTraffics(data))
  }, []);

  const handleTrafficType = (e) =>{
    const value = e.target.value;
    console.log(value);
  }
  const handleGeography = (e) =>{
    const value = e.target.value;
    console.log(value);
  }
  const handleCategory = (e) =>{
    const value = e.target.value;
    console.log(value);
  }
  const handleSubCategory = (e) =>{
    const value = e.target.value;
    console.log(value);
  }
  const handleFilter = (e) =>{
    const value = e.target.value;
    console.log(value);
  }
  const handleCPA = (e) =>{
    const value = e.target.value;
    console.log(value);
  }

  return (
    <div className=" container mt-5 ">
      {/* ==== Search Bar start === */}
      <div className="mb-3 row">
        <div className="col-sm-2">
          <label htmlFor="" className="searchText col-form-label">
            Searching for
          </label>
        </div>
        <div className="col-sm-10">
          <form className="">
            <input
              className="searchField form-control me-2"
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
          <div className="mb-3 row d-flex">
            <div className="col-md-4">
              <label htmlFor="" className="searchText me-4 col-form-label">
                Traffic Type
              </label>
            </div>
            <div className="col-sm-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleTrafficType}
              >
                <option selected>Select Your Type</option>
                {
                  trafficTypes?.map(trafficType => <option defaultValue={trafficType.name} key={trafficType.name}>{trafficType.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="mb-3 row d-flex">
            <div className="col-md-4">
              <label htmlFor="" className="searchText">
                Geography
              </label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleGeography}
              >
                {/* Country name */}
                <option selected>Any Country</option>
                {
                  countrys?.map(county => <option value={county.name} key={county.name}>{county.name}</option>)
                }

              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ++ Category Start +++  */}

      <div className="trafficType d-md-flex mt-5">
        <div className="col-md-5 ">
          <div className="mb-3 row d-flex">
            <div className="col-md-4">
              <label htmlFor="" className="searchText me-4 col-form-label">
                Category
              </label>
            </div>
            <div className="col-sm-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleCategory}
              >
                <option selected>All Categories</option>
                {
                  categories?.map(category => <option value={category.name} key={category.id}>{category.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="mb-3 row d-flex">
            <div className="col-md-4">
              <label htmlFor="" className="searchText  col-form-label">
                Sub Category
              </label>
            </div>

            <div className="col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleSubCategory}
              >
                <option selected>All Sub Categories</option>
                {
                  sbuCategories?.map(subCategory => <option value={subCategory.name} key={subCategory.id}>{subCategory.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* +++ Filter Option ++++ */}
      <div className="trafficType d-md-flex mt-5">
        <div className="col-md-5 ">
          <div className="mb-3 row d-flex">
            <div className="col-md-4">
              <label htmlFor="" className="searchText me-4 col-form-label">
                Filter
              </label>
            </div>
            <div className="col-sm-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleFilter}
              >
                <option selected>Select for Filter</option>
                {
                  traffics?.map(traffic => <option value={traffic.name} key={traffic.id}>{traffic.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="mb-3 row d-flex">
            <div className="col-md-4">
              <label htmlFor="" className="searchText">
                CPA Type
              </label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleCPA}
             >
                <option selected>Select YOur CPA</option>
                {
                  cpas?.map(cpa => <option value={cpa.name} key={cpa.id}>{cpa.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* +++ Button +++ */}
      <div className="mt-5">
        <button className="apply-button">Apply Search Button</button>
      </div>

      <div className="m-5"></div>

      {/* === Table start ==== */}
      <div className="">
        <table className="">
          <tr className="table-header">
            <th>ID</th>
            <th>Name</th>
            <th>Types</th>
            <th>Rates</th>
            <th>EPC</th>
            <th>Traffic</th>
          </tr>
          <tr className="first-colum">
            <td className="id-data">
              1645 <i className="fas fa-eye"></i>
            </td>
            <td className="name-data">Free code Camp for example some text will be go here </td>
            <td className="type-data">Fixed</td>
            <td className="type-data">1.6$ per Lead</td>
            <td className="type-data">0.04</td>
            <td className="type-data">
              <i className="fas fa-copy"></i>
              <i className="fas fa-mobile-android"></i>
              <i className="fas fa-images"></i>
              <i className="fas fa-search"></i>
              <i className="fas fa-desktop"></i>
              <i className=" fab fa-facebook-square"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Traffic;
