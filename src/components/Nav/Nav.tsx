import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-scroll';

enum Locale {
    EN = 'en',
    PL = 'pl',
}

const Nav = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(
            i18n.language === Locale.PL ? Locale.EN : Locale.PL
        );
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    return (
        <>
            {width >= 1048 ? (
                <nav className="grid grid-cols-1fr-2fr font-custom items-center text-center m-10 text-3xl lg:text-xl ">
                    <Link to="about">
                        <span className="cursor-pointer">Kunegunda Kosek</span>
                    </Link>

                    <div className="hidden lg:flex items-center justify-around ">
                        <button onClick={changeLanguage}>
                            {i18n.language.toUpperCase()}
                        </button>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer block lg:inline-block mt-2 lg:mt-0 hover:duration-300 "
                        >
                            {t('nav.about')}
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer block border-bgc lg:inline-block mt-2 lg:mt-0"
                        >
                            {t('nav.skills')}
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer block lg:inline-block mt-2 lg:mt-0"
                        >
                            {t('nav.projects')}
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer block lg:inline-block mt-2 lg:mt-0"
                        >
                            {t('nav.certificates')}
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer block lg:inline-block mt-2 lg:mt-0 border-bg-bgc "
                        >
                            {t('nav.contact')}
                        </Link>
                    </div>
                </nav>
            ) : (
                <nav className="grid grid-cols-2fr-1fr items-center text-center m-5 text-lg">
                    <span className="nav__logo">Kunegunda Kosek</span>

                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>
                            <button onClick={changeLanguage}>
                                {i18n.language.toUpperCase()}
                            </button>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {t('nav.about')}
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {t('nav.skills')}
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {t('nav.projects')}
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {t('nav.certificates')}
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {t('nav.skills')}
                        </MenuItem>
                    </Menu>
                </nav>
            )}
        </>
    );
};

export default Nav;
