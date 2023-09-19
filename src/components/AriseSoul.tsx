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
      initial={{
        x: '-55%',
      }}
      animate={{
        y: ['-60%', '-55%', '-60%'],
        transition: {
          repeat: Infinity,
          duration: 2,
        },
      }}
      exit={{
        y: -1000,
        transition: {
          duration: 2,
        },
      }}
    />
  )
}

const AriseSoulImage = styled(motion.img)<Pick<AriseSoulProps, 'visible'>>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 70px;
  height: auto;
  z-index: 999;
  top: 55%;
  left: 50%;
`
