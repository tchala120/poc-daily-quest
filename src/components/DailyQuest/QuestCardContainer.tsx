import styled from '@emotion/styled'

interface QuestCardContainerProps {
  isSpecial?: boolean
  notAllowedToClick: boolean
  highlighted: boolean
}

export const QuestCardContainer = styled.div<QuestCardContainerProps>`
  background: ${(props) =>
    props.isSpecial
      ? 'url(/special-quest-bg.png)'
      : 'url("/simple-quest-bg.png")'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: ${(props) => (props.notAllowedToClick ? 'not-allowed' : 'pointer')};
  transition: all 0.25s;
  border: ${(props) => (props.highlighted ? '2px solid #fff' : 'none')};
  border-radius: 10px;
  color: #fff;
`
