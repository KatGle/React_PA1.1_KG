import React from 'react';
import logo from '../../icons/logo.svg'
import './Header.css';
import Motive from '../Theme/Motive';
import dashboard from '../../icons/dashboard.svg';
import layouts from '../../icons/layouts.svg';
import account from '../../icons/account.svg';
import authentications from '../../icons/authentications.svg';
import misc from '../../icons/misc.svg';
import cards from '../../icons/cards.svg';
import user from '../../icons/user.svg';
import extended from '../../icons/extended.svg';
import boxicons from '../../icons/boxicons.svg';
import form from '../../icons/form.svg';


function Header(){

    return (
        <div className='header-navigation'>
                
            <ul>
                <li><Motive/></li>
                <span id='logo-sneat'><img src={logo} className="App-logo" alt="logo" /><h2>SNEAT</h2></span>
                <li><a href='/dashboard'><img src={dashboard} className="icons" alt="dashboard" /><span className='left-menu'>Dashboard</span></a></li>
                <li><a href='/layouts'><img src={layouts} className="icons" alt="layouts" /><span className='left-menu'>Layouts</span></a></li>
                <li><b>PAGES</b></li>
                <li><a href='/account-settings'><img src={account} className="icons" alt="account settings" /><span className='left-menu'>Account Settings</span></a></li>
                <li><a href='/authentications'><img src={authentications} className="icons" alt="authentications" /><span className='left-menu'>Authentications</span></a></li>
                <li><a href='/misc'><img src={misc} className="icons" alt="misc" /><span className='left-menu'>Misc</span></a></li>
                <li><b>COMPONENTS</b></li>
                <li><a href='/cards'><img src={cards} className="icons" alt="cards" /><span className='left-menu'>Cards</span></a></li>
                <li><a href='/user-interface'><img src={user} className="icons" alt="user interface" /><span className='left-menu'>User interface</span></a></li>
                <li><a href='/extended-ui'><img src={extended} className="icons" alt="extended ui" /><span className='left-menu'>Extended UI</span></a></li>
                <li><a href='/boxicons'><img src={boxicons} className="icons" alt="boxicons" /><span className='left-menu'>Boxicons</span></a></li>
                <li><b>FORMS & TABLES</b></li>
                <li><a href='/form-elements'><img src={form} className="icons" alt="form" /><span className='left-menu'>Form Elements</span></a></li>
            </ul>
        </div>
    );
}


export default Header;