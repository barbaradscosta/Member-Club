import styled from 'styled-components';

const Container = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 16px;
  font-family: 'Oxygen', sans-serif;
  max-height: 275px; /* altura total do componente */
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin-top: 1.6rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-right: 0.5rem;

  /* Estiliza scrollbar (opcional, só pra melhorar aparência no Chrome) */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Time = styled.div`
  font-size: 14px;
  line-height: 140%;
`;

const CheckIcon = styled.img`
  width: 32px;
  height: 32px;
`;

type History = {
  date: string;
  time: string;
};

type Props = {
  history: History[];
  cutsRemaining: number;
};

export function HistoryList({ history, cutsRemaining }: Props) {
  const maxCuts = 10;
  const safeCutsRemaining = Math.min(Math.max(cutsRemaining, 0), maxCuts);
  const completed = maxCuts - safeCutsRemaining;

  return (
    <Container>
      <Header>
        <span>HISTÓRICO</span>
        <span>{completed} cortes</span>
      </Header>

      <Separator />

      <ScrollArea>
        {history.map((item, index) => (
          <Item key={index}>
            <Time>
              {item.date}
              <br />
              {item.time}
            </Time>
            <CheckIcon src="/assets/Icon.png" alt="Check" />
          </Item>
        ))}
      </ScrollArea>
    </Container>
  );
}
