import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`

export const ScoreCardContainer = styled.div`
  margin: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`

export const ParagraphScore = styled.p`
  font-family: 'Roboto';
  color: #000000;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin: 0;
`

export const ScoreSpan = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`

export const ItemsImagesContainer = styled.ul``

export const PlayAgainButton = styled.button``

export const PopUpContainer = styled.div``

export const PopUpButton = styled(PlayAgainButton)``

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img``

export const CloseLineButton = styled.button``

export const CloseLineContainer = styled.div``
