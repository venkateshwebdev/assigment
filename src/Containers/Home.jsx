import { useContext, useEffect } from "react";
import UserDataContext from "../Context/usersDataContext";
import UserCard from "../Components/UserCard";
import { UserButton } from "../Components/Navbar";
import loader from "../icons/icons8-loading-infinity.gif"

const Home = () => {
    const {userData,isLoading} = useContext(UserDataContext)
    return(
    isLoading?
    <div className="loader"><div><h1>Loading</h1><img src={loader} alt="load"/></div></div>
    :!userData[0]?
    <div className="initial">
        <h1>Click on the Get Users button on the Navbar to Get User Data</h1>
        <div className="home-button">or Click Here <UserButton/></div>
        </div>
    :(
        <div className="home-container">
            {userData?.map((e)=><UserCard key={e.id} src={e.avatar} email={e.email} name={`${e.first_name} ${e.last_name}`} />)}
        </div>
    ))
}
 
export default Home;