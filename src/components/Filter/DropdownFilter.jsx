
import { useDispatch, useSelector } from "react-redux";
import { FilterActions } from "../../store/FilterSlice";
import { PaginationActions } from "../../store/PaginationSlice";
const DropdownFilter=({options,identifier,classname})=>{
   const dispatch=useDispatch();
   const retreatEvent=useSelector((state)=>state.filter.event)
    const handleSelect=(data)=>{
if(identifier==='date')
{
    dispatch(FilterActions.filterByDate(data));
}
if(identifier==="type")
{
    dispatch(FilterActions.filterByType(data))
}
if(identifier==='limit')
{
dispatch(PaginationActions.setPageLimit(data))
const currentPageEvent=retreatEvent.slice(0,data)
dispatch(PaginationActions.calTotalPage(Math.floor(retreatEvent.length/data) +1))
dispatch(FilterActions.storeCurrentPageData(currentPageEvent))
dispatch(PaginationActions.updatePage(1))
}
    }
    return <select className={classname} onChange={(data)=>{
        handleSelect(data.target.value)}}>
    { options.map((optionData)=>(
        <option  value={optionData.value} key={optionData.label}>{optionData.label}</option>
     
     )) }  </select>}
export default DropdownFilter;