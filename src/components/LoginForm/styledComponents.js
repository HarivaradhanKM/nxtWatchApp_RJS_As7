import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
`
export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font: 15px Roboto;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
`
export const SubmitError = styled.p`
  font: 12px Roboto;
  color: #ff0b37;
`
export const InputLabel = styled.label`
  font: 500 12px Roboto;
  color: #475569;
`
export const UserInput = styled.input`
  font: 15px Roboto;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font: 15px Roboto;
  color: #1e293b;
`
