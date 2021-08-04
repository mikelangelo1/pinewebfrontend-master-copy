import { useState, useEffect } from "react";
// import { useAuth, useResolved } from "hooks";
import './App.css';
import axiosConfig from './axiosConfig';
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, useParams, Redirect } from 'react-router-dom';
=======
import { BrowserRouter as Router, Switch, Route, Redirect, useParams } from 'react-router-dom';
>>>>>>> eddee52607236221d71853d2e6da1dfed46dad51
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import Support from "./components/Home/Home/Support/Support";
import Supportt from "./components/Supportt/Supportt";
import Success from "./components/Home/Success/Success";
import Failed from "./components/Home/Failed/Failed";
import AcceptRequest from "./components/Home/AcceptRequest/AcceptRequest";
import RejectRequest from "./components/Home/RejectRequest/RejectRequest";
import Fleets from "./components/Fleets/Fleets";
import DriverDetails from "./components/Fleets/DriverDetails/DriverDetails";
import AddVehicle from "./components/Fleets/AddVehicle/AddVehicle";
import MoreActions from "./components/Fleets/MoreActions/MoreActions";
import NewDriver from "./components/Fleets/NewDriver/NewDriver";
import Vehicles from "./components/Fleets/Vehicles/Vehicles";
import MyAccount from "./components/Settings/MyAccount/MyAccount";
import UserDetails from "./components/Settings/UserDetails/UserDetails";
import AddBankDetails from "./components/Settings/AddBankDetails/AddBankDetails";
import InviteSuccessful from "./components/Settings/InviteSuccessful/InviteSuccessful";
import ChangePassword from "./components/Settings/ChangePassword/ChangePassword";
import BankInformation from "./components/Settings/BankInformation/BankInformation";
import BusinessProfile from "./components/Settings/BusinessProfile/BusinessProfile";
import InviteNewUsers from "./components/Settings/InviteNewUsers/InviteNewUsers";
import Trips from "./components/Trips/Trips";
import MoreActionsTrips from "./components/Trips/MoreActionsTrips/MoreActionsTrips";
import MoreActionsTrips2 from "./components/Trips/MoreActionsTrips2/MoreActionsTrips2";
import SelectTripType from "./components/Trips/SelectTripType/SelectTripType";
import Profile from "./components/Home/Profile/Profile";
import EnterBusiness from "./components/Authentication/EnterBusiness/EnterBusiness";
import Details from "./components/Authentication/Details/Details";
import VerifyAccount from "./components/Authentication/VerifyAccount/VerifyAccount";
import ThanksForSigning from "./components/Authentication/ThanksForSigning/ThanksForSigning";
import CreateAccount from "./components/Authentication/CreateAccount/CreateAccount";
import SuccessfulSignUp from "./components/Authentication/CreateAccount/CreateAccount";
import InviteYourTeam from "./components/Authentication/InviteYourTeam/InviteYourTeam";
// import Bookings from "./components/Home/Bookings/Bookings";
import InviteSent from "./components/Authentication/InviteSent/InviteSent";
import Login from "./components/Authentication/Login/Login";
import BookingDetailsAssigned from "./components/BookingDetailsAssigned"
import BookingDetailsNew from "./components/BookingDetailsNew"
import { setCurrentUser } from './redux/actions/auth';
import AuthPage from "./pages/auth/auth.component";
import setAuthToken from "./utils/setAuthToken";
import store from "./redux/store"
import { Provider } from "react-redux";
import {LOGOUT } from './redux/actions/types'




// const app = function App() {
//   let [user] = useState([]);
//   user = localStorage.getItem('user');
 const App = () => {
   useEffect(() => {
     //check for token in LS
     if (localStorage.token) {
       setAuthToken(localStorage.token);
     }
     store.dispatch(setCurrentUser());

     //log user out from all the tabs if they log out in one tab
     window.addEventListener('storage', () => {
       if (!localStorage.token) store.dispatch( {type: LOGOUT});
     });
   }, [])


  return (
    <Provider store={store}>
      <>
      <div className="App">
        <Router>
          <Switch>
          <Route path="/register" component={CreateAccount} />
            <Route path="/login" component={Login} />
            <div>
              <Navbar />
              <Route path="/details-new/:id" component={BookingDetailsNew} />
              <Route path="/" component={Home} exact />
              <Route path="/fleets" component={Fleets} />
              <Route path="/trips" component={Trips} />
              <Route path="/moreactionstrips" component={MoreActionsTrips} />
              <Route path="/moreactionstrips2" component={MoreActionsTrips2} />
              <Route path="/selecttriptype" component={SelectTripType} />
              <Route path="/profile" component={Profile} />
              <Route path="/supportt" component={Supportt} />
              <Route path="/support" component={Support} />
              <Route path="/enterbusiness" component={EnterBusiness} />
              <Route path="/invitesuccessful" component={InviteSuccessful} />
              <Route path="/userdetails" component={UserDetails} />
              <Route path="/invitenewusers" component={InviteNewUsers} />
              <Route path="/details" component={Details} />
              <Route path="/moreactions" component={MoreActions} />
              <Route path="/addbankdetails" component={AddBankDetails} />
              <Route path="/driverdetails" component={DriverDetails} />
              <Route path="/addvehicle" component={AddVehicle} />
              <Route path="/changepassword" component={ChangePassword} />
              <Route path="/vehicles" component={Vehicles} />
              <Route path="/success" component={Success} />
              <Route path="/failed" component={Failed} />
              <Route path="/acceptrequest" component={AcceptRequest} />
              <Route path="/rejectrequest" component={RejectRequest} />
              <Route path="/businessprofile" component={BusinessProfile} />
              <Route path="/bankinformation" component={BankInformation} />
              <Route path="/myaccount" component={MyAccount} />
              <Route path="/newdriver" component={NewDriver} />
              <Route path="/verifyaccount" component={VerifyAccount} />
              <Route path="/thanksforsigning" component={ThanksForSigning} />
              <Route path="/successfulsignUp" component={SuccessfulSignUp} />
              <Route path="/inviteyourteam" component={InviteYourTeam} />
              {/* <Route path="/bookings" component={Bookings} /> */}
              <Route path="/invitesent" component={InviteSent} />
              <Route path="/details-assigned" component={BookingDetailsAssigned} />
<<<<<<< HEAD
              {/* <Route path="/details-new/:id" component={BookingDetailsNew} /> */}
              <Route path="/details-new/:id" component={BookingDetailsNew} />
=======
>>>>>>> eddee52607236221d71853d2e6da1dfed46dad51


            </div>
          </Switch>
        </Router>
      </div>
      </>
    </Provider>
  );
}

export default App;

// const mapStateToProp = ({ user }) => ({
//   currentUser: user.currentUser
// });x

// const mapDispatchToProp = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

// export default connect(mapStateToProp, mapDispatchToProp)(app);

