import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/constant";
import './SearchElements.scss'
import { Link } from "react-router-dom";

const SearchElements = () => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
   const [showResults, setShowResults] = React.useState(false)
  const onClickShow = () => setShowResults(true)

  const handleSearchClick = () => {
    setSearchActive(!isSearchActive);
  };

  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await axios.get(`${baseURL}/servicesData`);
    // setServicesData(response.data.reverse());
    setServicesData(response.data);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = servicesData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(servicesData);
    }
  };

  return (
    <>
      <div className="header__area-menubar-right-box-search">
        <div className="search" onClick={handleSearchClick}>
          <span className="header__area-menubar-right-box-search-icon">
            <i className="fal fa-search" />
          </span>
        </div>

        <div
          className={
            isSearchActive
              ? "header__area-menubar-right-box-search-box active "
              : "header__area-menubar-right-box-search-box "
          }
        >
          <form>
            <input
              type="search"
              placeholder="Search Here....." onClick={onClickShow}
              onChange={(e) => searchItems(e.target.value) }
            />
            <button type="submit">
              <i className="fal fa-search" />
            </button>
            { showResults ?
            <ul className="search_showOuter">
              {searchInput.length > 1
                ? filteredResults.map((item) => {
                    return <li><Link  onClick={handleSearchClick} to={`/our-services/services-details/${item.id}`}>{item.title}</Link></li>;
                  })
                : servicesData.slice(0, 5).map((item) => {
                    return <li><Link  onClick={handleSearchClick} to={`/our-services/services-details/${item.id}`}>{item.title}</Link></li>;;
                  })}
            </ul> : null }
          </form>{" "}
          <span
            className="header__area-menubar-right-box-search-box-icon"
            onClick={handleSearchClick}
          >
            <i className="fal fa-times" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchElements;
