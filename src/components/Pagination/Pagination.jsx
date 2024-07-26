import { useDispatch, useSelector } from "react-redux";
import pageLimitation from "../../utils/PaginationData";
import DropdownFilter from "../Filter/DropdownFilter"
import './Pagination.css'
import { PaginationActions } from "../../store/PaginationSlice";
import { FilterActions } from "../../store/FilterSlice";
const  Pagination=()=>{
    const currentPage=useSelector((state)=>state.pagination.currentPage);
    const dispatch=useDispatch();
    const pageLimit=useSelector((state)=>state.pagination.pageLimit)
    const totalPage=useSelector((state)=>state.pagination.totalPage);
    const retreatEvent=useSelector((state)=>state.filter.event)
    const handlePage=(data)=>{
        if(data==='prev'&&currentPage>0)
        {
            const data=retreatEvent.slice((currentPage-2)*pageLimit,(currentPage-1)*pageLimit)
            dispatch(PaginationActions.updatePage(currentPage-1))
            dispatch(FilterActions.storeCurrentPageData(data))
        }
            if(data==='next' &&currentPage<totalPage)
            {
                const data=retreatEvent.slice(currentPage*pageLimit,(currentPage+1)*pageLimit)
                dispatch(PaginationActions.updatePage(currentPage+1))
                dispatch(FilterActions.storeCurrentPageData(data))
            }
    }
return <div className="pagination">
    <button className="button" disabled={currentPage===1} onClick={()=>{handlePage("prev")}}>Previous</button>
    <p className="pagination-value">{currentPage}</p>
    <button className="button" disabled={currentPage>=totalPage} onClick={()=>{handlePage("next")}}>Next</button>
    <DropdownFilter options={pageLimitation} identifier="limit" classname="select1"/>
    </div>
}
export default Pagination;