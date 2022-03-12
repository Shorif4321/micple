import React, { useEffect, useState } from "react";
import "./Traffic.css";

const Traffic = () => {

  const [trafficTypes, setTrafficTypes] = useState([]);
  const [countrys, setCountrys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sbuCategories, setsubCategories] = useState([]);
  const [cpas, setCpas] = useState([]);
  const [traffics, setTraffics] = useState([]);
  const [details, setDetails] = useState([]);

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

  useEffect(() => {
    fetch("./Details.JSON")
      .then(res => res.json())
      .then(data => setDetails(data.slice(0,25)))
  }, []);


  const handleSearch = (e)=>{
    const value = e.target.value;
    console.log(value)
  }  

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
    <div className="container mt-5">
      {/* ==== Search Bar start === */}
      <div className="search-item mb-lg-3 mb-lg-5 row">
        <div className="col-3 col-sm-3 col-md-2">
          <label htmlFor="" className="searchText col-form-label">
            Searching for
          </label>
        </div>
        <div className="col-12 col-sm-9 col-md-10">
          <form className="">
            <input
              onChange={handleSearch}
              className="searchField form-control me-2"
              placeholder="Enter the Company Name, Keyword or Designation"
              type="search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>

      {/* ==== Traffic type start  === */}
      <div className="trafficType d-md-flex ">
        <div className="col-md-5 ">
          <div className="mb-3 row d-flex">
            <div className="col-3 col-sm-3 col-md-4">
              <label htmlFor="" className="searchText me-4 col-form-label">
                Traffic Type
              </label>
            </div>
            <div className="col-12 col-sm-9  col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleTrafficType}
              >
                <option defaultValue="">Select Your Type</option>
                {
                  trafficTypes?.map(trafficType => <option defaultValue={trafficType.name} key={trafficType.name}>{trafficType.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className=" row d-flex">
            <div className="col-3 col-md-4">
              <label htmlFor="" className="searchText">
                Geography
              </label>
            </div>
            <div className="col-12 col-sm-9 col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleGeography}
              >
                {/* Country name */}
                <option defaultValue="">Any Country</option>
                {
                  countrys?.map(county => <option value={county.name} key={county.name}>{county.name}</option>)
                }

              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ++ Category Start +++  */}

      <div className="trafficType d-md-flex mb-3">
        <div className="col-md-5 ">
          <div className=" row d-flex">
            <div className="col-3 col-md-4">
              <label htmlFor="" className="searchText me-4 col-form-label">
                Category
              </label>
            </div>
            <div className="col-sm-9 col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleCategory}
              >
                <option defaultValue="">All Categories</option>
                {
                  categories?.map(category => <option value={category.name} key={category.id}>{category.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className=" row d-flex">
            <div className="col-4 col-sm-3 col-md-4">
              <label htmlFor="" className="searchText  col-form-label">
                Sub Category
              </label>
            </div>

            <div className="col-sm-9 col-sm-9 col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleSubCategory}
              >
                <option defaultValue="">All Sub Categories</option>
                {
                  sbuCategories?.map(subCategory => <option value={subCategory.name} key={subCategory.id}>{subCategory.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* +++ Filter Option ++++ */}
      <div className="trafficType d-md-flex">
        <div className="col-md-5 ">
          <div className="mb-3 row d-flex">
            <div className="col-3 col-md-4">
              <label htmlFor="" className="searchText me-4 col-form-label">
                Filter
              </label>
            </div>
            <div className="col-sm-9 col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleFilter}
              >
                <option defaultValue="">Select for Filter</option>
                {
                  traffics?.map(traffic => <option value={traffic.name} key={traffic.id}>{traffic.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="mb-3 row d-flex">
            <div className="col-3 col-md-4">
              <label htmlFor="" className="searchText">
                CPA Type
              </label>
            </div>
            <div className="col-sm-9 col-md-8">
              <select
                className="form-select searchField"
                aria-label="Default select example"
                onChange={handleCPA}
             >
                <option defaultValue="">Select YOur CPA</option>
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
          <tbody>
          <tr className="table-header">
            <th>ID</th>
            <th>Name</th>
            <th>Types</th>
            <th>Rates</th>
            <th>EPC</th>
            <th>Traffic</th>
          </tr>
          {
            details.map(detail=><tr className="first-colum" key={detail.id}>
            <td className="id-data">
              {detail.id} <i className="fas fa-eye"></i>
            </td>
            <td className="name-data">{detail.name.slice(0,50)}</td>
            <td className="type-data">{detail.type}</td>
            <td className="type-data">{detail.rates}</td>
            <td className="type-data">{detail.EPC}</td>
            <td className="type-data">
              <i className="fas fa-copy"></i>
              <i className="fas fa-mobile-android"></i>
              <i className="fas fa-images"></i>
              <i className="fas fa-search"></i>
              <i className="fas fa-desktop"></i>
              <i className=" fab fa-facebook-square"></i>
            </td>

          </tr>
          )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Traffic;
