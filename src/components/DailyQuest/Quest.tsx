import { useState } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'

import { AriseSoul } from 'components/AriseSoul'
import { Flag } from 'components/Flag'
import { MissingQuestOverlay } from 'components/MissingQuestOverlay'
import { RewardTitle } from 'components/RewardTitle'
import { Star } from 'components/Star'
import { QuestCardContainer } from './QuestCardContainer'

import { useDailyQuestStatus } from 'hooks/useDailyQuestStatus'

export interface QuestItem {
  id: number
  dateIndex: number
  reward: number
  isCompleted: boolean
  isSpecial?: boolean
}

interface QuestProps {
  quest: QuestItem
  currentQuestDateIndex: number
}

export const Quest = ({ quest, currentQuestDateIndex }: QuestProps) => {
  const [isQuestAccomplished, setIsQuestAccomplished] = useState<boolean>(
    quest.isCompleted
  )

  const { isPresent, isFuture, isMissing } = useDailyQuestStatus({
    quest,
    currentQuestDateIndex,
  })

  return (
    <QuestContainer>
      <QuestCardContainer
        isSpecial={quest.isSpecial}
        notAllowedToClick={isFuture}
        highlighted={isPresent}
        onClick={() => {
          if (isPresent) {
            setIsQuestAccomplished(true)
          }
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Star key={index} />
        ))}

        <MissingQuestOverlay visible={isMissing}>Missing</MissingQuestOverlay>

        <div className="quest-info">
          <RewardTitle amount={quest.reward} />

          <AnimatePresence>
            {isQuestAccomplished ? null : <AriseSoul visible={isPresent} />}
          </AnimatePresence>

          {isQuestAccomplished ? (
            <Flag isCompleted={quest.isCompleted} />
          ) : null}
        </div>
      </QuestCardContainer>

      <DayIndicate>Day {quest.dateIndex + 1}</DayIndicate>
    </QuestContainer>
  )
}

const QuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const DayIndicate = styled.span`
  font-size: 18px;
  font-weight: bold;
`
