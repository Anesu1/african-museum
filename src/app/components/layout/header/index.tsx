import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MenuList from "./MenuList";
import Link from "next/link";
import ThemeToggler from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../logo";

const Header = () => {
    const { data: session } = useSession();
    const [user, setUser] = useState<{ user: any } | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // Track closing animation
    const [sticky, setSticky] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        setSticky(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    const handleSignOut = () => {
        localStorage.removeItem("user");
        signOut();
        setUser(null);
    };

    // Close menu with animation when clicking outside
    const menuData = [
        { id: 1, title: "Home", path: "/", newTab: false },
        { id: 2, title: "About", path: "/about", newTab: false },
        { id: 3, title: "Exhibitions", path: "/projects", newTab: false },
        { id: 4, title: "News", path: "/blog", newTab: false },
        { id: 5, title: "Visit", path: "/contact", newTab: false },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsClosing(true);
                setTimeout(() => {
                    setMenuOpen(false);
                    setIsClosing(false);
                }, 300);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className={`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${sticky ? "before:h-full" : "before:h-0"}`}>
            <div className="container">
                <nav className={`relative flex item-center justify-between ${sticky ? 'py-5' : 'py-7'}`}>
                    <div className='flex items-center'>
                        <Logo sticky={sticky} />
                    </div>
                    <div className="flex items-center gap-7">
                        <div className="flex item-center gap-3">
                            <ThemeToggler />
                            {user?.user || session?.user ? (
                                <div className="relative group flex items-center justify-center">
                                    <Image
                                        src="/images/avatar/avatar_1.jpg"
                                        alt="Image"
                                        width={35}
                                        height={35}
                                        quality={100}
                                        className="rounded-full cursor-pointer "
                                    />
                                    <p
                                        className="absolute w-fit text-sm font-medium text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-gray text-white py-1 px-2 min-w-28 rounded-full shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3"
                                    >
                                        {user?.user || session?.user?.name}
                                    </p>
                                </div>
                            ) : ('')}
                        </div>

                        <div className="relative flex align-middle">
                            {menuOpen === false ?
                                <div className="flex align-middle">
                                    <button onClick={() => setMenuOpen(true)}>
                                        <Image src={sticky ? "/images/Icon/menu-button-sticky.svg" : "/images/Icon/menu-button.svg"} alt="icon" width={45} height={45} className="cursor-pointer" />
                                    </button>
                                </div>
                                :
                                <div
                                    ref={menuRef}
                                    className={`absolute -top-5 right-0 flex flex-col gap-5 min-w-80 sm:min-w-96 bg-white dark:bg-twilliteblack p-6 rounded-3xl shadow-lg transition-all duration-300 ease-in-out z-10 
                                    ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                                >
                                    <div className="flex items-center justify-between pb-5 border-b border-secondary/15 dark:border-white/15">
                                        <p className="text-secondary dark:text-white">Menu</p>
                                        <div onClick={() => setMenuOpen(false)} className="p-2 cursor-pointer">
                                            <Image src="/images/Icon/close-icon.svg" alt="icon" width={16} height={16} className="dark:hidden" />
                                            <Image src="/images/Icon/close-icon-dark.svg" alt="icon" width={16} height={16} className="hidden dark:block" />
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="flex flex-col gap-2 pb-4">
                                            {menuData?.map((menuItem:any, index:any) =>
                                                <MenuList key={index} item={menuItem} closeMenu={() => setMenuOpen(false)} />
                                            )}
                                        </ul>

                                        
                                    </div>
                                    <div>
                                        <Link href="tel:+263786579814" className="text-secondary/60 dark:text-white/60 hover:text-secondary dark:hover:text-white">+263 78 657 9814</Link>
                                        <Link href="mailto:info@africanrecords.africa"><h4>
info@africanrecords.africa</h4></Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
