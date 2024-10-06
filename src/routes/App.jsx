import Header from "../components/Header";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
const App=()=>{
   const fetchStatus=useSelector((store)=>store.fetchStatus);
return(

    <>

   <Header />
<FetchItems/>
    <Outlet/>
  <Footer/>

    </>
)
}
export default App;