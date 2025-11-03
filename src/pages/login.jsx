import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate=useNavigate()
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)

    const users = props.users

    function handleUinput(evt) {
        seteusername(evt.target.value)
    }
    function handlePinput(evt) {
        setepassword(evt.target.value)
    }
    function checkuser() {
       
        var userfound = false

        users.forEach(function (item) {
            if (item.username == eusername && item.password == epassword) {
                console.log("login succesuful")
                userfound = true
                navigate("/landing",{state:{users:eusername}})
            }

        })

        if (userfound===false) {
            console.log("login failed")
            setruser(false)
        }
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey hi</h1>
                {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">please sign up before you login</p>}

                <div className=" flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUinput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handlePinput} />

                    <button onClick={checkuser} className="bg-[#8272DA] w-24 p-1 rounded-md"> login</button>
                    <p>don't have an account?<Link to="/signup" className="underline">sign up</Link> </p>
                </div>
            </div>

        </div>
    )
}

export default Login