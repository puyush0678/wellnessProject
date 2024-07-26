import { useDispatch } from "react-redux";
import { FilterActions } from "../../store/FilterSlice";
import { useState } from "react";
import './SearchBar.css'
const SearchBar=()=>{
    const dispatch=useDispatch();
const [searchKey,setSearchKey]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
dispatch(FilterActions.filterBySearchBar(searchKey))
    }
    const handleClearSearchBar=()=>{
        dispatch(FilterActions.filterBySearchBar(''))
        setSearchKey('')
    }
return(
<div className="searchbar">
<form onSubmit={handleSubmit} className="form">
    <input className="input" type="text" value={searchKey} placeholder="Search retreats by Title" onChange={(event)=>{setSearchKey(event.target.value)}}/>
    </form>
        <button onClick={handleClearSearchBar} className="clear">Clear</button></div>)
}
export default SearchBar;