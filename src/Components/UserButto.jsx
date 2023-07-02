import { useContext } from "react"
import UserDataContext from "../Context/usersDataContext"
const UserButton =()=>{
    const {setUserData,setIsLoading} = useContext(UserDataContext)
    const handleDataFetch = async()=>{
        setIsLoading(true)
        setTimeout(async()=>{
        const rawData = await fetch("https://reqres.in/api/users?page=1")
        const resData = await rawData.json()
        console.log(resData)
        setUserData(resData.data)
        setIsLoading(false)},10000)
    }
    return(
        <div className="navbar-button" onClick={handleDataFetch}>Get users</div>
    )
}
export default UserButton;