import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router-dom";

function Landing()
{
    const data=useLocation()
    return(
         
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/*header*/}
        <Header name={data.state.user}/>
        {/*card*/}
        <div className=" flex justify-between gap-5 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
          <Card bgcolor={"#FD6663"} title={"october"} subtitle={"14:06:24"}/>
          <Card bgcolor={"#FCA201"} title={"Built"} subtitle={"React"} />
        </div>
        {/*todocontainer*/}
        <Todocontainer />
      
      </div>

    </div>
  );
    
}
export default Landing