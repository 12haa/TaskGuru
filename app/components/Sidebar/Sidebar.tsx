'use client'
import React from 'react'
import styled from "styled-components";
import {useGlobalState} from "@/app/context/globalContextProvider";
import Image from "next/image";
import menu from "@/app/utils/menu";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Sidebar = () => {
    const {theme} = useGlobalState()
    const navigate = useRouter()
    const handleClick = (link :string) => {
        navigate.push(link)
    }
    return (
        <SidebarStyled theme={theme}>
            <div className="profile">
                <div className="profile-overlay">
                    <div className='image'>
                        <Image width={70} height={70} alt="profile" src="/avatar1.png"/>

                    </div>
                    <h1>
                        <span>Mohamad</span>
                        <span>Khaefi</span>
                    </h1>
                </div>
                <ul className="nav-items">
                    {menu.map((item) => (
                        <div key={item.id}>
                            <li onClick={()=>handleClick(item.link)} className={`nav-item`}>
                                {item.icon}
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        </div>
                    ))}


                </ul>
            </div>


        </SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${props => props.theme.sidebarWidth};
  background-color: ${props => props.theme.colorBg2};
  border: 2px solid ${props => props.theme.borderColor2};
  border-radius: 1rem;

`
export default Sidebar
