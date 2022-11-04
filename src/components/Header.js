import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'


function Header() {
  return (
    <Container>
        <Logo src="./images/logo.svg">

        </Logo>
        <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
            <a href="#">Solar Panels</a>
            <a href="#">Solar Roof</a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <CustomMenu />
        </RightMenu>
        {/* <SideNav>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model S</a></li>
        </SideNav> */}
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
`

const Logo = styled.img`

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 900px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        padding: 0 10px;
        margin-right: 10px;
        //flex-wrap: nowrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const SideNav = styled.div`
    display: none;
    postion: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 15;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`