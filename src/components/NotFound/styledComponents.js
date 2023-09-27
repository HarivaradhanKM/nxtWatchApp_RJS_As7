import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92px;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and(min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and(min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font: 25px Roboto;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NotFoundVideosNote = styled.p`
  font: 18px Roboto;
  color: ${props => props.headingColor};
  text-align: center;
`
