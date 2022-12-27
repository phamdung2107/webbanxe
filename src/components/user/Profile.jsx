
import { Link } from 'react-router-dom'
import Footer from "../more/Footer";
import Header from "../Home/Header";
import MetaData from "../more/Metadata";
import "./Profile.css";

const user = {
    name: 'John',
    createdAt: '2015-01-01T00:00:00',
    url: 'http://test.com/',
}

const Profile = () => {

    return (
        <>
        <Header />
        <div>
            <MetaData title={`${user.name}'s profile`} />
            <div className="profileContainer">
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column"
                }}>
                    <h1 style={{
                        fontFamily: "Poppins,sans-serif",opacity:"1",
                        fontSize:"2vmax"
                    }}>My Profile</h1>
                    <img src={user.url} alt={user.name} className="profile__img" />
                    <Link to="/me/update/info" className="edit__profile">Edit Profile</Link>
                </div>
            </div>
            <div className="information">
                <div className="middle">
            <div className="info">
                <h4 style={{
                    padding:"0px 5px"
                }}>Full Name:</h4>
                <p>{user.name}</p>
            </div>
            <div className="info">
                <h4 style={{
                    padding:"0px 5px"
                }}>Email:</h4>
                <p>{user.email}</p>
            </div>
            <div className="info">
            <h4 style={{
                    padding:"0px 5px"
                }}>Joined On:</h4>
            <p>{String(user.createdAt).substr(0,10)}</p>
            </div> 
               
              <div className="change__info">
                  <Link to="/orders" className="settings">My Orders</Link>
                  <Link to="/me/update" className="settings">Change Password</Link>
              </div>
        </div>  
        </div>
        </div>
        <Footer />
       </>
    )
}

export default Profile
