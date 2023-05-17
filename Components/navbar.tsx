import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

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
  return (
    <>
      <header className="flex flex-wrap container mx-auto max-w-full items-center p-6 justify-between bg-white shadow-md sticky top-0 z-50">

        <nav className={`md:flex md:items-center font-title w-full md:w-auto`}>
          <ul className="text-lg inline-block">
            <>
              {!user.uid ? (
                menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="my-3 md:my-0 items-center mr-4 md:inline-block block "
                  >
                    <Link href={item?.link}>
                      <div className="text-blue-800 hover:text-blue-900 transition">
                        {item?.name}
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
                    <Link href="/dashboard">
                      <div className="text-blue-800 hover:text-blue-900 transition">
                        Dashboard
                      </div>
                    </Link>
                  </li>
                  <li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
                    <div
                      onClick={handleLogout}
                      className="text-blue-800 hover:text-blue-900 transition cursor-pointer"
                    >
                      Logout
                    </div>
                  </li>
                </>
              )}
            </>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Navbar;