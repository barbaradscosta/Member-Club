import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Oxygen', sans-serif;
  background-color: #fff;
  border-radius: 24px;

  display: flex;
  justify-content: center;
`;

const InnerBox = styled.div`
  background-color: #fff;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 78%;
`;

const TopInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: #756C71;
  margin-bottom: 12px;
`;

const CutsRemaining = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #4A4448;
`;

const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BarWrapper = styled.div`
  flex: 1;
  background: #E9E9E9;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const Fill = styled.div<{ percent: number }>`
  height: 100%;
  background: linear-gradient(
    90deg,
    #2DAAE4 0%,
    #D2AAAA 33.33%,
    #856CCF 66.67%,
    #D65B83 100%
  );
  width: ${({ percent }) => percent}%;
  transition: width 0.3s ease;
`;

const TextSmall = styled.span`
  color: #4A4448;
  font-size: 10px;
  white-space: nowrap;
`;

const RightColumn = styled.div`
  background-color: #E9E7E9;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

const Icon = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin: 0;
  padding: 0;
  display: block;
  position: relative;
  top: 4px;
`;



type Props = {
  cutsRemaining: number;
};

export function ProgressBar({ cutsRemaining }: Props) {
  const maxCuts = 10;
  const safeCutsRemaining = Math.min(Math.max(cutsRemaining, 0), maxCuts);
  const completed = maxCuts - safeCutsRemaining;
  const percent = (completed / maxCuts) * 100;

  return (
    <Container>
      <InnerBox>
        <LeftColumn>
          <TopInfo>
            <CutsRemaining>{safeCutsRemaining}</CutsRemaining>
            <span>cortes restantes</span>
          </TopInfo>

          <BottomInfo>
            <BarWrapper>
              <Fill percent={percent} />
            </BarWrapper>
            <TextSmall>{completed} de {maxCuts}</TextSmall>
          </BottomInfo>
        </LeftColumn>

        <RightColumn>
          <Icon src="/assets/PinGift.png" alt="Ícone de presente" />
        </RightColumn>
      </InnerBox>
    </Container>
  );
}
