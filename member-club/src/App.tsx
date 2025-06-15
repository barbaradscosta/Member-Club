import { useState } from "react";
import styled from "styled-components";
import { ArrowElbowDownLeft } from "phosphor-react";
import { ClientCard } from "./components/ClientCard";
import { HistoryList } from "./components/HistoryList";
import { LoyaltyCard } from "./components/LoyaltyCard";
import { ProgressBar } from "./components/ProgressBar";
import { CongratsModal } from "./components/CongratsModal";

type Appointment = {
  date: string;
  time: string;
};

type Loyalty = {
  totalCuts: number;
  cutsNeeded: number;
  cutsRemaining: number;
};

type Client = {
  id: string;
  name: string;
  clientSince: string;
  appointmentHistory: Appointment[];
  loyaltyCard: Loyalty;
};

const PageWrapper = styled.div`
  font-family: "Oxygen", sans-serif;
  background: #f6f6f6;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #d65b83;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  max-width: 116px;
`;

const SearchWrapper = styled.div`
  border: 1px solid #d3cfd2;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 25rem;
  max-height: 3.5rem;
  border-radius: 15px;
  padding: 10px;
  background-color: #dfdcdf;

  &:focus-within {
    border: 1px solid #d658b3;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ColumnLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;

const Column = styled.div`
  width: 100%;
  max-width: 568px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 300px;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: #dfdcdf;

  &:focus {
    color: #d658b3;
    border: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  background: #332b31;
  border-radius: 8px;
  cursor: pointer;
  color: white;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  border-radius: 16px;
  align-items: start;
  justify-content: center; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DivContent = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 16px;
`;

const LoyaltyContent = styled.div`
  background: #f4f1f2;
  border-radius: 16px;
  max-width: 568px;
`;

const ProgressBarContent = styled.div`
  background: #f4f1f2;
  border-radius: 16px;
  max-width: 568px;
  max-height: 117px;
`;

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

function App() {
  const [searchId, setSearchId] = useState("");
  const [client, setClient] = useState<Client | null>(null);
  const [showCongrats, setShowCongrats] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:3000/clients/${searchId}`);
      if (!res.ok) throw new Error("Cliente não encontrado");

      const data = await res.json();
      setClient(data);

      if (data.loyaltyCard.totalCuts >= 10) {
        setShowCongrats(true);
      }

      setError("");
    } catch (err) {
      setClient(null);
      setError("ID inválido. Verifique e tente novamente.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <PageWrapper>
      <Header>
        <Logo src="/assets/Logo.png" />
      </Header>

      <SearchWrapper>
        <Input
          type="text"
          placeholder="ID do cartão"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>
          <ArrowElbowDownLeft size={20} />
        </Button>
      </SearchWrapper>

      {error && <ErrorMsg>{error}</ErrorMsg>}

      {client && (
        <>
          <DivContent>
            <Content>
              <ColumnLeft>
                <>
                  <ClientCard
                    name={client.name}
                    since={client.clientSince}
                    image="/assets/Picture.png"
                  />
                </>
                <MainCard>
                  <HistoryList
                    history={client.appointmentHistory}
                    cutsRemaining={client.loyaltyCard.cutsRemaining}
                  />
                </MainCard>
              </ColumnLeft>

              <Column>
                <LoyaltyContent>
                  <LoyaltyCard totalCuts={client.loyaltyCard.totalCuts} />
                </LoyaltyContent>

                <ProgressBarContent>
                  <ProgressBar
                    cutsRemaining={client.loyaltyCard.cutsRemaining}
                  />
                </ProgressBarContent>
              </Column>
            </Content>
          </DivContent>

          {showCongrats && (
            <CongratsModal onClose={() => setShowCongrats(false)} />
          )}
        </>
      )}
    </PageWrapper>
  );
}

export default App;
