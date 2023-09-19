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
  overflow: hidden;
  cursor: ${(props) => (props.notAllowedToClick ? 'not-allowed' : 'pointer')};
  transition: all 0.25s;
  border: ${(props) => (props.highlighted ? '2px solid #fff' : 'none')};
  border-radius: 10px;
  color: #fff;
  box-shadow: ${(props) =>
    props.isSpecial ? ' 0px 0px 10px #4ac3fa;' : 'none'};
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`
