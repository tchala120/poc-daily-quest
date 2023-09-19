import styled from '@emotion/styled'
import { Col, Row } from 'react-flexbox-grid'

import { DailyQuest, type QuestItem } from 'components/DailyQuest'
import { AsterQuest } from 'components/AsterQuest'

const listQuests: QuestItem[] = [
  {
    id: 1,
    dateIndex: 0,
    reward: 1,
    isCompleted: false,
  },
  {
    id: 2,
    dateIndex: 1,
    reward: 1,
    isCompleted: false,
  },
  {
    id: 3,
    dateIndex: 2,
    reward: 1,
    isCompleted: true,
  },
  {
    id: 4,
    dateIndex: 3,
    reward: 1,
    isCompleted: false,
  },
  {
    id: 5,
    dateIndex: 4,
    reward: 1,
    isCompleted: false,
  },
  {
    id: 6,
    dateIndex: 5,
    reward: 1,
    isCompleted: false,
  },
  {
    id: 7,
    dateIndex: 6,
    reward: 10,
    isCompleted: false,
    isSpecial: true,
  },
]

const App = () => {
  return (
    <main>
      <Container>
        <Row
          style={{
            alignItems: 'end',
          }}
        >
          <Col xs={9}>
            <DailyQuest listQuests={listQuests} />
          </Col>

          <Col xs={3}>
            <img
              src="/weekly-quest.svg"
              alt="weekly-quest"
              style={{
                width: '100%',
                height: '428px',
                objectFit: 'cover',
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <AsterQuest />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default App

const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 20px;
`
