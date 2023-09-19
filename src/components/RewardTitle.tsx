import styled from '@emotion/styled'

interface RewardTitleProps {
  amount: number
  tokenName?: string
}

export const RewardTitle = ({
  amount,
  tokenName = 'Aster',
}: RewardTitleProps) => {
  return (
    <RewardTitleContainer>
      +{amount} {tokenName}
    </RewardTitleContainer>
  )
}

const RewardTitleContainer = styled.div`
  position: absolute;
  font-weight: bold;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`
