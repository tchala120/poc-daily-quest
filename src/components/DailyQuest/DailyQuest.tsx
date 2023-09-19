import styled from '@emotion/styled'

import { ProgressBar } from 'components/ProgressBar'
import { Title } from 'components/Title'
import { Quest, type QuestItem } from './Quest'

interface DailyQuestProps {
  listQuests: QuestItem[]
}

export const currentQuestDateIndex = 3

export const DailyQuest = ({ listQuests }: DailyQuestProps) => {
  return (
    <DailyQuestContainer>
      <Title
        style={{
          margin: 0,
        }}
      >
        Daily check in
      </Title>

      <div className="daily-quest-content">
        <ProgressBar
          listQuests={listQuests}
          currentQuestDateIndex={currentQuestDateIndex}
        />

        <div className="quest-container">
          {listQuests.map((quest) => (
            <Quest
              key={quest.id}
              quest={quest}
              currentQuestDateIndex={currentQuestDateIndex}
            />
          ))}
        </div>

        <Remark>
          **If you miss your daily check-in, you will need to restart the
          collection process.
        </Remark>
      </div>
    </DailyQuestContainer>
  )
}

const DailyQuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;

  .daily-quest-content {
    padding: 48px 36px;
    border: 1px solid #fff;

    .quest-container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 16px;
    }
  }
`

const Remark = styled.span`
  display: block;
  font-size: 18px;
  margin-top: 24px;
`
