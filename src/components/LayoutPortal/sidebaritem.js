import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

export function SidebarItem({ to, text, checkAllPath }) {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: checkAllPath })
    return (
        <NavItemStyled>
            <Nav.Link as={Link} to={to} active={match} className='text-black'>
                {text}
            </Nav.Link>
        </NavItemStyled>
    )
}

const NavItemStyled = styled(Nav.Item)`
    .nav-link.active, .nav-pills, .show>.nav-link{
        border: 3px solid;
        background-color: ${props => props.theme.mainColor} !important;
    }
`