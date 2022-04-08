import React, { useEffect, useState } from "react";
import useVolenteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";
import './Main.css'

const Main = () => {
  // const [volenteers, setVolenteers] = useState([]);
  // useEffect(() => {
  //   fetch(`data.json`)
  //     .then((res) => res.json())
  //     .then((data) => setVolenteers(data));
  // }, []);

  const [volenteers] = useVolenteers();
  const [searchResult,setResult] = useState([]);

  const handleSearch=(event)=> {

    const searchText=(event.target.value)
    const match=volenteers.filter(volenteer=>volenteer.name.includes(searchText))
    setResult(match)

  }

  return (
    <div className="container App">
      <h3>This is :{volenteers.length}</h3>
      <div className="m-4">
        <input onChange={handleSearch}  type="text" className="rounded-lg-2" placeholder="Search"/>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4  ">
        {searchResult.map((activity) => (
          <Activity key={activity._id} activity={activity}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Main;
