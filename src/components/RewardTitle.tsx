import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface RewardTitleProps {
  amount: number
  tokenName?: string
  isSpecial?: boolean
}

export const RewardTitle = ({
  amount,
  tokenName = 'ASTR',
  isSpecial,
}: RewardTitleProps) => {
  return (
    <RewardTitleContainer isSpecial={isSpecial}>
      +{amount} {tokenName}
    </RewardTitleContainer>
  )
}

const specialTextStyle = css`
  color: #fff;
  text-shadow:
    0px 5px 2px #4ac3fa,
    0px 10px 2px #000;
`

const RewardTitleContainer = styled.div<Pick<RewardTitleProps, 'isSpecial'>>`
  position: relative;
  text-align: center;
  font-weight: 900;
  color: #fff;
  margin-top: 12px;
  z-index: 999;
  font-size: 18px;

  ${(props) => (props.isSpecial ? specialTextStyle : null)}
`
