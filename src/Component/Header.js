import React, { useState,useEffect } from 'react';
import './Header.css';
import { SearchBox, Image } from '@fluentui/react';
import { Popover, PopoverTrigger } from '@fluentui/react-components';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLinkClick = (link) => {
        console.log(`Navigating to ${link}`);
        setIsOpen(false); // Close dropdown after clicking
        // Add your navigation logic here, e.g., using React Router
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the target is not the image and not the dropdown
            if (isOpen && !event.target.closest('.user-profile-dropdown')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="header">
            <SearchBox className='search-bar' size='small' appearance="underline" placeholder='search...' />
            <div className="profile-pic">
               
                        <Image
                            alt="Allan's avatar"
                            src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
                            height={28}
                            width={28}
                            className='userprofilepic'
                            onClick={toggleDropdown}
                        />
                        {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li onClick={() => handleLinkClick('Profile')}>Profile</li>
                        <li onClick={() => handleLinkClick('Settings')}>Settings</li>
                        <li onClick={() => handleLinkClick('Logout')}>Logout</li>
                    </ul>
                </div>
            )}
                   

            </div>

        </header>
    );
};

export default Header;


