import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";
import { FilterTypeData } from "../../utils/FilterData";
import './Filters.css'
const Filters=()=>{
    return ( 
    <div className="filters">
        <DropdownFilter options={FilterTypeData} identifier="type" classname="select"/>
        <SearchBar/>
    </div>
    )
}
export default Filters