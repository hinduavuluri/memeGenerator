import {Component} from 'react'

import {
  BgContainer,
  FormContainer,
  Heading,
  MemeContainer,
  LabelText,
  MemeText,
  InputText,
  CustomSelect,
  CustomOption,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionId: '',
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionIdInput: fontSizesOptionsList[0].optionId,
  }

  submitForm = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeOptionId: activeOptionIdInput,
    })
  }

  onChangeUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomtext = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOptionIdInput: event.target.value})
  }

  renderMemeGeneratorForm = () => {
    const {
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
      backgroundImageUrlInput,
    } = this.state
    return (
      <FormContainer onSubmit={this.submitForm}>
        <LabelText htmlFor="inputImageUrl">Image URL</LabelText>
        <InputText
          placeholder="Enter the Image URL"
          type="text"
          onChange={this.onChangeUrl}
          id="inputImageUrl"
          value={backgroundImageUrlInput}
        />
        <LabelText htmlFor="topText">Top Text</LabelText>
        <InputText
          placeholder="Enter the Top Text"
          type="text"
          value={topTextInput}
          onChange={this.onChangeToptext}
          id="topText"
        />
        <LabelText htmlFor="bottomText">Bottom Text</LabelText>
        <InputText
          id="bottomText"
          type="text"
          value={bottomTextInput}
          placeholder="Enter the Botton Text"
          onChange={this.onChangeBottomText}
        />
        <LabelText htmlFor="activeFontSize">Font Size</LabelText>
        <CustomSelect
          id="activeFontSize"
          value={activeOptionIdInput}
          onChange={this.onChangeOption}
        >
          {fontSizesOptionsList.map(eachItem => (
            <CustomOption key={eachItem.optionId} value={eachItem.optionId}>
              {eachItem.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeOptionId} = this.state
    return (
      <MemeContainer backgroundImage={backgroundImageUrl} data-testid="meme">
        <MemeText activeOptionId={activeOptionId}>{topText}</MemeText>
        <MemeText activeOptionId={activeOptionId}>{bottomText}</MemeText>
      </MemeContainer>
    )
  }

  render() {
    return (
      <BgContainer>
        <Heading>Meme Generator</Heading>
        {this.renderMeme()}
        {this.renderMemeGeneratorForm()}
      </BgContainer>
    )
  }
}

export default MemeGenerator
