import { Quest, type QuestItem } from './Quest'

export const currentQuestDateIndex = 3

interface DailyQuestProps {
  listQuests: QuestItem[]
}

export const DailyQuest = ({ listQuests }: DailyQuestProps) => {
  return (
    <>
      {listQuests.map((quest) => (
        <Quest
          key={quest.id}
          quest={quest}
          currentQuestDateIndex={currentQuestDateIndex}
        />
      ))}
    </>
  )
}
