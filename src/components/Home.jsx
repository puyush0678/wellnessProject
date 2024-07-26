import RetreatCard from "./RetreatCards/RetreatCard";
import UpperSection from "./RetreatCards/UpperSection";
import { useDispatch, useSelector} from 'react-redux';
import Filters from "./Filter/Filters";
import './Home.css'
import { useEffect, useState } from "react";
import fetchData from "../utils/http";
import { FilterActions } from "../store/FilterSlice";
import { PaginationActions } from "../store/PaginationSlice";
const HomePage = () => {
const dispatch=useDispatch();
const searchKey=useSelector((state)=>state.filter.searchBar)||""
const filterTypeKey=useSelector((state)=>state.filter.filterByType)||""
const pageLimit=useSelector((state)=>state.pagination.pageLimit)
const currentPageEvent=useSelector((state)=>state.filter.currentPageEvent)
const [showError,setShowError]=useState(false)
useEffect(()=>{
  const fetch=async()=>{
    if(searchKey!==undefined&&filterTypeKey!==undefined)
      {
      const response= await fetchData(searchKey,filterTypeKey)
      if(response!=="")
      {setShowError(false)
        dispatch(FilterActions.storeData(response))
        const data=response.slice(0,pageLimit)
        dispatch(FilterActions.storeCurrentPageData(data))
        dispatch(PaginationActions.updatePage(1))
         dispatch(PaginationActions.calTotalPage(Math.floor(response.length/pageLimit +1)))
      }
    }
        else
        {
          setShowError(true)
        }

    
  }
fetch()
},[searchKey,filterTypeKey])
    return (
      <>
    {!(window.innerWidth<750) && <UpperSection/>}
     <Filters/>
     <section className="content-section-retreats" id="new-events-section">
      
    {
     !showError&&currentPageEvent?<ul className="events-list">
        {currentPageEvent.map((event) => (
          <li key={event.id}>
            <RetreatCard event={event} />
          </li>
        ))}
      </ul>:<div>Data Not Found</div>}
      </section>   
        </>
    );
  };
  export default HomePage;
  