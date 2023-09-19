import styled from '@emotion/styled'

interface MissingQuestOverlayProps {
  visible: boolean
}

export const MissingQuestOverlay = styled.div<MissingQuestOverlayProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999999;
  color: #fff;
  font-weight: bold;
`
