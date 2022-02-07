import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Container>
            <a href="https://mui.com">
                <img src='/images/logo.svg' alt="" />
            </a>
            <Menu>
                <a href="https://mui.com">Model S</a>
                <a href="https://mui.com">Model 3</a>
                <a href="https://mui.com">Model X</a>
                <a href="https://mui.com">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="https://mui.com">Shop</a>
                <a href="https://mui.com">Tesla Account</a>
            </RightMenu>
            <CustomMenu />
        </Container>

    )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`;

const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display:none;
    }
`;


const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`;
