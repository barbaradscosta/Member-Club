// import styled from 'styled-components';

// const Card = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 1rem;
// `;

// const Slot = styled.div`
//   width: 48px;
//   height: 48px;
//   background: #F0F0F0;
//   border-radius: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CheckIcon = styled.img`
//   width: 28px;
//   height: 28px;
// `;

// type Props = {
//   totalCuts: number;
// };

// export function LoyaltyCard({ totalCuts }: Props) {
//   return (
//     <Card>
//       {Array.from({ length: 10 }, (_, i) => (
//         <Slot key={i}>
//           {i < totalCuts ? (
//             <CheckIcon src="/assets/PinCheck.png" alt="Check" />
//           ) : i === 9 ? (
//             <img src="/assets/gift.png" alt="Gift" style={{ width: 24, height: 24 }} />
//           ) : null}
//         </Slot>
//       ))}
//     </Card>
//   );
// }

import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 351px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 12px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 10px; 
  }
`;

const IdBox = styled.div`
  background: #e9e9e9;
  padding: 6px 12px;
  border-radius: 12px;
  font-family: "Oxygen", sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 10px; 
    padding: 3px 6px;
    border-radius: 12px;
  }
`;

const ChecksContainer = styled.div`
  width: 100%; 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const CheckWrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const CheckIcon = styled.img`
  max-width: 64px;

  @media (max-width: 768px) {
    max-width: 50px;
  }
`;

type Props = {
  totalCuts: number;
};

export function LoyaltyCard({ totalCuts }: Props) {
  const total = 10;

  return (
    <CardContainer>
      <Header>
        <Title>
          CARTÃO FIDELIDADE
          <br />
          Ao fazer cortes de cabelo, o décimo sai de graça!
        </Title>
        <IdBox>ID: 124-537-835-230</IdBox>
      </Header>

      <ChecksContainer>
  {Array.from({ length: total }).map((_, i) => (
    <CheckWrapper key={i}>
      {i < totalCuts ? (
        <CheckIcon src="/assets/PinCheck.png" alt="Check" />
      ) : i === 9 ? (
        <CheckIcon src="/assets/Icons.png" alt="Gift" />
      ) : null}
    </CheckWrapper>
  ))}
</ChecksContainer>
    </CardContainer>
  );
}
