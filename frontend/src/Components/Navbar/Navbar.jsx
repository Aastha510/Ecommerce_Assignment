
// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from '../Assets/logo.svg';
// import cart from '../Assets/cart.jpg';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");

//   return (
//     <div className='navbar'>
//       <div className='nav-logo'>
//         <img src={logo} alt='' />
//         <p>JCB</p>
//       </div>
//       <ul className='nav-menu'>
//         <li onClick={() => { setMenu("shop") }}>
//           <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
//           {menu === "shop" ? <hr /> : <></>}
//         </li>

//         <li className='nav-item' onClick={() => { setMenu("Men") }}>
//           <span><Link style={{ textDecoration: 'none' }} to='/Men'>Men</Link></span>
//           {menu === "Men" ? <hr /> : <></>}
//           <ul className='dropdown'>
//             <li><Link to='/men/shirts'>Shirts</Link></li>
//             <li><Link to='/men/jeans'>Jeans</Link></li>
//             <li><Link to='/men/shoes'>Shoes</Link></li>
//           </ul>
//         </li>

//         <li className='nav-item' onClick={() => { setMenu("Women") }}>
//           <span><Link style={{ textDecoration: 'none' }} to='/Women'>Women</Link></span>
//           {menu === "Women" ? <hr /> : <></>}
//           <ul className='dropdown'>
//             <li><Link to='/women/tops'>Tops</Link></li>
//             <li><Link to='/women/skirts'>Skirts</Link></li>
//             <li><Link to='/women/heels'>Heels</Link></li>
//           </ul>
//         </li>

//         <li className='nav-item' onClick={() => { setMenu("kids") }}>
//           <span><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link></span>
//           {menu === "kids" ? <hr /> : <></>}
//           <ul className='dropdown'>
//             <li><Link to='/kids/shirts'>Shirts</Link></li>
//             <li><Link to='/kids/pants'>Pants</Link></li>
//             <li><Link to='/kids/shoes'>Shoes</Link></li>
//           </ul>
//         </li>
//       </ul>

//       <div className='nav-login-cart'>
//         {localStorage.getItem('auth-token')
//           ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//           : <Link to='/login'><button>Login</button></Link>
//         }

//         <Link to='/cart'><img src={cart} alt=" " /></Link>
//         <div className='nav-cart-count'>0</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.svg';
import cart from '../Assets/cart.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>JCB</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li className='nav-item' onClick={() => { setMenu("Men") }}>
          <span><Link style={{ textDecoration: 'none' }} to='/popular/Men'>Men</Link></span>
          {menu === "Men" ? <hr /> : <></>}
          <ul className='dropdown'>
            <li><Link to='/men/shirts'>Shirts</Link></li>
            <li><Link to='/men/jeans'>Jeans</Link></li>
            <li><Link to='/men/shoes'>Shoes</Link></li>
          </ul>
        </li>

        <li className='nav-item' onClick={() => { setMenu("Women") }}>
          <span><Link style={{ textDecoration: 'none' }} to='/popular/Women'>Women</Link></span>
          {menu === "Women" ? <hr /> : <></>}
          <ul className='dropdown'>
            <li><Link to='/women/tops'>Tops</Link></li>
            <li><Link to='/women/skirts'>Skirts</Link></li>
            <li><Link to='/women/heels'>Heels</Link></li>
          </ul>
        </li>

        <li className='nav-item' onClick={() => { setMenu("kids") }}>
          <span><Link style={{ textDecoration: 'none' }} to='/popular/Kids'>Kids</Link></span>
          {menu === "kids" ? <hr /> : <></>}
          <ul className='dropdown'>
            <li><Link to='/kids/shirts'>Shirts</Link></li>
            <li><Link to='/kids/pants'>Pants</Link></li>
            <li><Link to='/kids/shoes'>Shoes</Link></li>
          </ul>
        </li>
      </ul>

      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/login'><button>Login</button></Link>
        }

        <Link to='/cart'><img src={cart} alt=" " /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
