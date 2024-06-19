import React, { useState } from 'react';
import { Container, Logo, Logoutbtn } from '../index';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: authStatus,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="py-5 shadow bg-[#9ccf33] z-10 sticky top-0 w-full">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link to="/">
                            <Logo  />
                        </Link>
                    </div>
                    {/* Mobile Menu Button - Visible on smaller screens */}
                    <div className="ml-auto md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-black focus:outline-none flex justify-center items-center"
                        >
                            {mobileMenuOpen ? (
                                // Close icon when menu is open
                                <svg
                                    className=" h-6 w-6 md:hidden absolute top-2 right-4 text-black focus:outline-none"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Menu icon when menu is closed
                                <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            )}
                        </button>
                    </div>
                    {/* Menu Items - Hidden on smaller screens by default */}
                    <ul
                        className={`${
                            mobileMenuOpen ? 'block' : 'hidden'
                        } md:flex md:w-auto md:space-x-4 md:ml-auto mt-4 md:mt-0`}
                    >
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}
                                    className=' block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-bold text-black'>
                                        <NavLink
                                            to={item.slug}
                                            className={({isActive}) =>
                                                ` ${isActive ? "text-[#2563eb]" : "text-black"}` }
                                            
                                            onClick={() => {
                                                setMobileMenuOpen(false); // Close menu on item click
                                                navigate(item.slug);
                                            }}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <li>
                                <Logoutbtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;

