import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-left: 10px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  border-radius: 5px;
  border-color: ${props => props.color};
  font-family: 'Roboto';
  padding: 5px 10px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  color: #606060;
  font: bold 12px Roboto;
  background-color: transparent;
  border: 1px solid #606060;
  border-radius: 6px;
  padding: 8px 12px;
  margin: 12px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: #fff;
  padding: 8px 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font: bold 12px Roboto;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`
export const ModalDesc = styled.p`
  font: 15px Roboto;
  margin: 10px;
  color: #000;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
