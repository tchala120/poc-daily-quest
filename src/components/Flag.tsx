import styled from '@emotion/styled'
import { motion } from 'framer-motion'

interface FlagProps {
  isCompleted: boolean
}

export const Flag = ({ isCompleted }: FlagProps) => {
  return (
    <FlagContainer
      transition={{
        duration: 0.5,
        delay: isCompleted ? 0 : 0.25,
      }}
      initial={{
        y: isCompleted ? '-50%' : '-1000%',
        x: '-50%',
      }}
      animate={{
        y: '-50%',
      }}
    >
      <img className="flag" src="/flag.svg" alt="flag" />
    </FlagContainer>
  )
}

const FlagContainer = styled(motion.div)`
  position: absolute;

  top: 50%;
  left: 50%;
  z-index: 999;

  .flag {
    width: 100px;
    height: auto;
  }
`
