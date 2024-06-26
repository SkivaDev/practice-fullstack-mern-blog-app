import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import { useRouter } from "next/router";

const Aside = () => {

    const router = useRouter();

    const [clicked, setClicked] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    }

    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname])
    

  return (
    <>
      <aside className="asideleft">
        <ul>
          <Link href={"/"}>
            <li className={`${activeLink === '/' ? 'navactive' : ''}`} onClick={() => handleLinkClick('/')}>
              <FaHome />
                <span>Dashboard</span>
            </li>
          </Link>
          <Link href={"/blogs"}>
            <li className={`${activeLink === '/blogs' ? 'navactive' : ''}`} onClick={() => handleLinkClick('/blogs')}>
              <BsPostcard />
                <span>Blogs</span>
            </li>
          </Link>
          <Link href={"/addblog"}>
            <li className={`${activeLink === '/addblog' ? 'navactive' : ''}`} onClick={() => handleLinkClick('/addblog')}>
              <MdOutlineAddPhotoAlternate />
                <span>AddBlog</span>
            </li>
          </Link>
          <Link href={"/draft"}>
            <li className={`${activeLink === '/draft' ? 'navactive' : ''}`} onClick={() => handleLinkClick('/draft')}>
              <MdOutlinePending />
                <span>Pending</span>
            </li>
          </Link>
          <Link href={"/settings"}>
            <li className={`${activeLink === '/settings' ? 'navactive' : ''}`} onClick={() => handleLinkClick('/settings')}>
              <IoSettingsOutline />
                <span>Settings</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
