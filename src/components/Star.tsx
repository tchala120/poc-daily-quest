import { motion, type MotionProps, type MotionStyle } from 'framer-motion'

const starMotionProps: MotionProps = {
  transition: {
    repeat: Infinity,
    duration: 1.5,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 0],
  },
}

export const Star = () => {
  const randomPercetage = Math.random() * 100
  const randomDegree = Math.random() * 360

  const style: MotionStyle = {
    position: 'absolute',
    height: 'auto',
    objectFit: 'cover',
    left: `${randomPercetage}%`,
    transform: `rotateX(${randomDegree}deg)`,
    width: `${randomPercetage}%`,
  }

  return (
    <motion.img {...starMotionProps} style={style} src="/star.svg" alt="star" />
  )
}
