import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`
export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavText = styled.p`
  font: 18px Roboto;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.h1`
  font: bold 25px Roboto;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactNote = styled.p`
  font: 18px Roboto;
  color: ${props => props.color};
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const NavigationSmallContainer = styled.nav`
  height: 60px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  bottom: 0;
  position: fixed;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
