import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface RewardTitleProps {
  amount: number
  tokenName?: string
  isSpecial?: boolean
  isPresent?: boolean
}

export const RewardTitle = ({
  amount,
  tokenName = 'ASTR',
  isSpecial,
  isPresent,
}: RewardTitleProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RewardTitleContainer isSpecial={isSpecial}>
        +{amount} {tokenName}
      </RewardTitleContainer>

      {isPresent ? (
        <span
          style={{
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: 4,
          }}
        >
          Click to Collect
        </span>
      ) : null}
    </div>
  )
}

const specialTextStyle = css`
  color: #fff;
`

const RewardTitleContainer = styled.div<Pick<RewardTitleProps, 'isSpecial'>>`
  position: relative;
  text-align: center;
  font-weight: 900;
  color: #fff;
  margin-top: 6px;
  z-index: 999;
  font-size: 18px;

  ${(props) => (props.isSpecial ? specialTextStyle : null)}
`
