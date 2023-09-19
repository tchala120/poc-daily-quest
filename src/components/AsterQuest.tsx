import styled from '@emotion/styled'

import { Title } from 'components/Title'

export const AsterQuest = () => {
  return (
    <AsterQuestContainer>
      <Title>Aster Quest</Title>

      <img src="/aster-quest.svg" alt="aster-quest" />
    </AsterQuestContainer>
  )
}

const AsterQuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  margin-top: 24px;

  img {
    max-width: 100%;
    height: auto;
  }
`
