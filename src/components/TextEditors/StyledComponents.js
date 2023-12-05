import styled from 'styled-components'

export const AppContainer = styled.div`
  background: #25262c;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextEditContainer = styled.div`
  background-color: #000;
  width: 1000px;
  max-width: 700px;
  border: 1px solid #000;
  display: flex;
  padding: 20px;
`

export const TextAndImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextHeading = styled.h1`
  color: #fff;
  font-family: 'roboto';
  font-size: 25px;
  font-weight: 500;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 70px;
`

export const TextEditorImage = styled.img`
  width: 350px;
  height: 400px;
`
export const TextEditorContainer = styled.div`
  background-color: #25262c;
  border-radius: 7px;
  border: 1px solid #f1f5f9;
  width: 300px;
  margin-left: 20px;
`

export const TextEditorUl = styled.ul`
  display: flex;
  padding: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const TextEditorsLi = styled.li`
  list-style-type: none;
`
export const BoldTextButton = styled.button`
  background-color: transparent;
  outline: none;
  // color: ${props => (props.isItalic ? '#faff00' : '#fff')};
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9 ')};
  margin-left: 5px;
  border: none;
  cursor: pointer;
`
export const ItalicTextButton = styled.button`
  background-color: transparent;
  outline: none;
  // color: ${props => (props.isItalic ? '#faff00' : '#fff')};
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9 ')};
  margin-left: 5px;
  border: none;
  cursor: pointer;
`

export const UnderLineTextButton = styled.button`
  background-color: transparent;
  outline: none;
  // color: ${props => (props.isItalic ? '#faff00' : '#fff')};
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9 ')};
  margin-left: 5px;
  border: none;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  border: none;
  border-top: 1px solid #f1f5f9;
  color: #fff;
  font-family: 'Roboto';
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  padding: 10px;
  font-size: 18px;
  border-radius: 7px;
  width: 287px;
  height: 510px;
  outline: none;
  padding-left: 20px;
`
