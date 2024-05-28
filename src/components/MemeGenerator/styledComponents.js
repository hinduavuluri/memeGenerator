// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 50px;
  color: #35469c;
  font-weight: bold;
`
export const LabelText = styled.label`
  font-family: roboto;
  font-size: 20px;
  color: #5a7184;
`

export const MemeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
  text-align: center;
  background-image: url (${props => props.backgroundImage});
`

export const MemeText = styled.p`
  font-family: roboto;
  font-size: 30px;
  color: #ffffff;
`
export const InputText = styled.input`
  height: 40px;
  color: #5a7184;
  font-size: 20px;
  font-family: roboto;
  margin-bottom: 30px;
`
export const CustomSelect = styled.select`
  height: 40px;
  color: #5a7184;
  font-family: roboto;
  margin-bottom: 30px;
`

export const CustomOption = styled.option`
  color: #1e293b;
  font-weight: bold;
  padding: 7px;
`
export const CustomButton = styled.button`
  height: 60px;
  background-color: #0b69ff;
  border-radius: 4px;
  border-width: 0px;
  color: #ffffff;
  font-family: roboto;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
