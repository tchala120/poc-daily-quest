import { type QuestItem } from 'components/DailyQuest'

interface DailyQuestStatusOptions {
  quest: QuestItem
  currentQuestDateIndex: number
}

export const useDailyQuestStatus = (options: DailyQuestStatusOptions) => {
  const { quest, currentQuestDateIndex } = options

  const isPast = quest.dateIndex < currentQuestDateIndex

  return {
    isPast,
    isPresent: quest.dateIndex === currentQuestDateIndex,
    isFuture: quest.dateIndex > currentQuestDateIndex,
    isMissing: isPast && !quest.isCompleted,
  }
}
