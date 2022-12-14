import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import HomeUser from './components/HomeUser'
import CreateUser from './components/CreateUser'
import ChangePassword from './components/ChangePassword'
import UpdateEmail from './components/UpdateEmail'
import UserGroup from './components/UserGroup'
import EditUser from './components/EditUser'
import Protected from './components/Protected'
import ViewApp from './components/ViewApp'
import EditTask from './components/EditTask'

function App() {

	function apps(){
		let params = useParams()
		return <div>params.id</div>
	}

  	return (
		<div className="index">
		  <BrowserRouter>
			<Routes>
				<Route element={<Protected/>}></Route>
				{/* <Route path="/" element={loggedIn ? <Home setLoggedIn={setLoggedIn} /> : <Logout setLoggedIn={setLoggedIn} />} /> */}
				<Route path="/" element={<Logout />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/HomeUser" element={<HomeUser />} />
				<Route path="/ChangePassword" element={<ChangePassword />} />
				<Route path="/UpdateEmail" element={<UpdateEmail />} />
				<Route path="/CreateUser" element={<CreateUser />} />
				<Route path="/EditUser" element={<EditUser />} />
				<Route path="/UserGroup" element={<UserGroup />} />
				<Route path="/App/:name" element={<ViewApp />} />
				<Route path="/Task/:taskname" element={<EditTask />} />
				{/* <Route path="/Home" element={<Protected><Home /></Protected>} /> */}
				{/* <Route path="/HomeUser" element={<Protected><HomeUser /></Protected>} />
				<Route path="/ChangePassword" element={<Protected><ChangePassword /></Protected>} />
				<Route path="/UpdateEmail" element={<Protected><UpdateEmail /></Protected>} />
				<Route path="/CreateUser" element={<Protected><CreateUser /></Protected>} />
				<Route path="/EditUser" element={<Protected><EditUser /></Protected>} />
				<Route path="/UserGroup" element={<Protected><UserGroup /></Protected>} /> */}
			</Routes>
		  </BrowserRouter>
		</div>
	  )
  }

export default App;