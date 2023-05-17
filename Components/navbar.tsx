import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = ({ children }: { children: React.ReactNode }) => {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Login",
      link: "/login",
    },
    {
      id: 3,
      name: "Sign Up",
      link: "/signup",
    },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="header">
        <nav className="w-full md:w-auto">
          <ul className="list_name">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNCxHp9VbriqhXMteKCqDdjXqzjQDxj_sA1He1JsYpA&s" alt="logo"width={30} className="logo" />
            <div className="center_list">
            {!user?.uid ? (
              menuItems.map((item) => (

                <li
                  key={item.id}
                  className="list_link"
                >
                  <Link href={item.link}>
                    <div className="link_div">
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <>
                <li className="list_link">
                  <Link href="/dashboard">
                      Dashboard
                  </Link>
                </li>
                <li className="list_link logout_button">
                <button type="button" onClick={handleLogout}className="btn btn-danger">Logout <FiLogOut /></button>
                </li>
              </>
            )}
            </div>
          </ul>

        </nav>
      </header>
      <div className="h-20"></div> {/* Add padding to the page content */}
      {children}
    </>
  );
};

export default Navbar;

