/* eslint-disable import/named */
import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'
// import EditContext from '../../context/EditContext'

import {
  AppContainer,
  TextEditContainer,
  TextAndImgContainer,
  TextHeading,
  TextEditorImage,
  TextEditorContainer,
  TextEditorUl,
  TextEditorsLi,
  BoldTextButton,
  ItalicTextButton,
  UnderLineTextButton,
  // TextButtonItalic,
  TextArea,
} from './StyledComponents'

class TextEditors extends Component {
  state = {
    inputText: '',
    // bold: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onChangeText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onClickBold = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {
      inputText,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state
    return (
      <AppContainer>
        <TextEditContainer>
          <TextAndImgContainer>
            <TextHeading>Text Editor</TextHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextAndImgContainer>
          <TextEditorContainer>
            <TextEditorUl>
              <TextEditorsLi>
                <BoldTextButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  isBold={isBoldActive}
                >
                  <VscBold size={25} />
                </BoldTextButton>
              </TextEditorsLi>
              <TextEditorsLi>
                <ItalicTextButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  isItalic={isItalicActive}
                >
                  <GoItalic size={25} />
                </ItalicTextButton>
              </TextEditorsLi>
              <TextEditorsLi>
                <UnderLineTextButton
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  isUnderline={isUnderlineActive}
                >
                  <AiOutlineUnderline size={25} />
                </UnderLineTextButton>
              </TextEditorsLi>
            </TextEditorUl>
            <TextArea
              onChange={this.onChangeText}
              value={inputText}
              isBold={isBoldActive}
              isItalic={isItalicActive}
              isUnderline={isUnderlineActive}
            />
          </TextEditorContainer>
        </TextEditContainer>
      </AppContainer>
    )
  }
}

export default TextEditors
