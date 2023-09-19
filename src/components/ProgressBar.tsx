import styled from '@emotion/styled'

import { type QuestItem } from './DailyQuest'

interface ProgressBarProps {
  listQuests: QuestItem[]
  currentQuestDateIndex: number
}

export const ProgressBar = ({
  listQuests,
  currentQuestDateIndex,
}: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      {listQuests.map((quest) => {
        const isFirstQuest = quest.dateIndex === 0
        const isLastQuest = quest.dateIndex === listQuests.length - 1

        const icon = getProgressIconByStatus(quest, {
          currentQuestDateIndex,
        })

        const image = (
          <img
            src={icon}
            alt="aster coin"
            style={{
              width: 40,
              aspectRatio: '1/1',
              borderRadius: '50%',
            }}
          />
        )

        if (isFirstQuest) {
          return <LeftProgress>{image}</LeftProgress>
        }

        if (isLastQuest) {
          return <RightProgress>{image}</RightProgress>
        }

        return <BaseProgressBar key={quest.id}>{image}</BaseProgressBar>
      })}
    </ProgressBarContainer>
  )
}

const ProgressBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 32px;
`

const BaseProgressBar = styled.div`
  height: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16;
`

const LeftProgress = styled(BaseProgressBar)`
  width: 66%;
  margin: 0 0 0 auto;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  img {
    margin-right: auto;
  }
`

const RightProgress = styled(BaseProgressBar)`
  width: 66%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  img {
    margin-left: auto;
  }
`

interface ProgressIconByStatusOptions {
  currentQuestDateIndex: number
}

const getProgressIconByStatus = (
  quest: QuestItem,
  options: ProgressIconByStatusOptions
) => {
  const isActive = quest.dateIndex === options.currentQuestDateIndex

  const isPast = quest.dateIndex < options.currentQuestDateIndex
  const isFuture = quest.dateIndex > options.currentQuestDateIndex

  if (isActive) {
    return '/aster-coin.svg'
  }

  if (isPast) {
    if (quest.isCompleted) {
      return '/quest-completed.svg'
    }

    return '/quest-missing.svg'
  }

  if (isFuture) {
    return '/blank-circle.svg'
  }

  return '/tiny-planet.svg'
}
