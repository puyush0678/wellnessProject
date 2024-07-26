
const fetchData=async(searchBar="",filterTypeKey="")=>{
let url="https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?"

url+='title='+searchBar+"&type="+filterTypeKey;
    const response=await fetch(url)
if(!response.ok){
    console.log("Data Not Found")
    return "" ;
}
    const responseData=await response.json()
return responseData


}
export default fetchData