import React from 'react';
import styles from './NavbarMenuButton.module.css';
const NavbarMenuButton = ({ text }) => {
    return (
        <button className={styles.main_navbar_menu_btn} type="button">
            {text}
        </button>
    );
};

export default NavbarMenuButton;
