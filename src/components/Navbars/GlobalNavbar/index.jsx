import Image from 'next/image';
import Hamburger from '../../../../public/assets/hamburger.svg';
import Cross from '../../../../public/assets/cross.webp';
import Logo from '../../../../public/assets/logo.svg';
import Truck from '../../../../public/assets/truck.svg';
import NavbarMenuButton from '../../Buttons/NavbarMenuButton/NavbarMenuButton';
import styles from './GlobalNavbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

const GlobalNavbar = () => {
    const [sideBar, setSideBar] = useState(false);
    const showMenu = () => {
        setSideBar(!sideBar);
    };

    return (
        <nav className={styles.main_navbar}>
            <Link href="/">
                <div className={styles.navbar_logo}>
                    <Image
                        className={styles.main_navbar_logo}
                        width={240}
                        height={40}
                        src={Logo}
                        alt=""
                    />
                </div>
            </Link>
            <div className={styles.main_navbar_menu}>
                <p>Are you an Roadside service Provider?</p>

                <NavbarMenuButton text={'Join Now'} />
                <NavbarMenuButton text={'Login'} />

                <div className={styles.menu_secondary_image_cont}>
                    <Image src={Truck} height={60} width={120} alt="" />
                </div>
            </div>

            <div className={styles.main_navbar_menu_mobile}>
                <div className={styles.hamburger} onClick={showMenu}>
                    <Image src={Hamburger} height={30} width={30} alt="Hamburger" />
                </div>
            </div>

            {/* Navbar Phone */}
            {sideBar && (
                <div id="menu" className={styles.sidebar}>
                    <div className={styles.sidebar_head}>
                        <Link href="/">
                            <div className={styles.navbar_logo}>
                                <Image
                                    className={styles.main_navbar_logo}
                                    width={240}
                                    height={40}
                                    src={Logo}
                                    alt=""
                                />
                            </div>
                        </Link>
                        <div className={styles.main_navbar_menu_mobile}>
                            <div
                                className={styles.close}
                                onClick={showMenu}
                            >
                                <Image src={Cross} height={30} width={30} alt="Close Sidebar" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.sidebar_menu}>
                        <Link href="/" passHref>
                            <a
                                onClick={showMenu}
                                className={styles.sidebar_menu_item}
                                aria-label="home"
                            >
                                Home
                            </a>
                        </Link>
                        <Link href="/" passHref>
                            <a
                                onClick={showMenu}
                                className={styles.sidebar_menu_item}
                                aria-label="services"
                            >
                                Services
                            </a>
                        </Link>
                        <Link href="/" passHref>
                            <a
                                onClick={showMenu}
                                className={styles.sidebar_menu_item}
                                aria-label="info"
                            >
                                Info
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default GlobalNavbar;


export async function getStaticProps() {
    const response = await fetch(
        'http://149.56.27.98:786/services'
    );
    const data = await response.json();
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}