import React from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from '../../pages/Dashboard';
import Layouts from '../../pages/Layouts';
import AccountSettings from '../../pages/AccountSettings';
import Authentications from '../../pages/Authentications';
import Misc from '../../pages/Misc';
import Cards from '../../pages/Cards';
import UserInerface from '../../pages/UserInterface';
import ExtendedUI from '../../pages/ExtendedUI';
import Boxicons from '../../pages/Boxicons';
import FormElements from '../../pages/FormElements';


function Routing() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/layouts" element={<Layouts/>}></Route>
            <Route path="/account-settings" element={<AccountSettings />}></Route>
            <Route path="/authentications" element={<Authentications/>}></Route>
            <Route path='/misc' element={<Misc/>}></Route>
            <Route path="/cards" element={<Cards/>}></Route>
            <Route path="/user-interface" element={<UserInerface/>}></Route>
            <Route path="/extended-ui" element={<ExtendedUI/>}></Route>
            <Route path="/boxicons" element={<Boxicons />}></Route>
            <Route path='/form-elements' element={<FormElements/>}></Route>
        </Routes>
    )
}

export default Routing;