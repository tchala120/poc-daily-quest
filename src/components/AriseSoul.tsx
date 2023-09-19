import styled from '@emotion/styled'
import { motion } from 'framer-motion'

interface AriseSoulProps {
  visible?: boolean
}

export const AriseSoul = ({ visible }: AriseSoulProps) => {
  return (
    <AriseSoulImage
      src="/arise-soul.svg"
      alt="arise-soul"
      visible={visible}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      initial={{
        x: '-50%',
      }}
      animate={{
        y: ['-60%', '-55%', '-60%'],
      }}
      exit={{
        y: -1000,
      }}
    />
  )
}

const AriseSoulImage = styled(motion.img)<Pick<AriseSoulProps, 'visible'>>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 100px;
  height: auto;
  z-index: 999;
  top: 50%;
  left: 50%;
`