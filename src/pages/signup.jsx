import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const navigate=useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    function handleUinput(evt) {
        seteusername(evt.target.value)
    }
    function handlePinput(evt) {
        setepassword(evt.target.value)
    }
    function addUser(){
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey hi</h1>
                <p>sign up here :)</p>
                <div className=" flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUinput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handlePinput}/>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password" />
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md"> signup</button>
                    <p>Already have an account?<Link to="/" className="underline">login</Link> </p>
                </div>
            </div>

        </div>
    )
}
export default Signup