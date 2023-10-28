import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { path: '/', title: 'Books', className: 'navlink' },
    { path: 'categories', title: 'Categories', className: 'navlink' },
  ];
  return (
    <div className="nav">
      <span className="logo">
        Bookstore CMS
      </span>
      <div className="nav-links">
        {links.map((link) => (
          <li className={link.className} key={link.title}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;