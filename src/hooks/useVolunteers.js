import { useEffect, useState } from "react"

const useVolenteers=()=>{

const [volunteers,setVolunteers]=useState([])
useEffect(()=>{


          fetch(`data.json`)
          .then(res =>res.json())
          .then(data =>setVolunteers(data))
},[]);

return [volunteers,setVolunteers]




}

export default useVolenteers;