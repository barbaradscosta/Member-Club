import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%; 
  box-sizing: border-box; 
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: white; 
  padding: 1px;
  display: block;
`;

const AvatarWrapper = styled.div`
  background: linear-gradient(
    90deg,
    #2daae4 0%,
    #d2aaaa 33.33%,
    #856ccf 66.67%,
    #d65b83 100%
  );
  padding: 2.5px;
  border-radius: 16px;
  display: inline-block;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.span`
  font-family: "Oxygen", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const Since = styled.span`
  font-family: "Oxygen", sans-serif;
  font-size: 12px;
  color: #888;
`;

type Props = {
  name: string;
  since: string;
  image: string;
};

export function ClientCard({ name, since, image }: Props) {
  return (
    <Card>
      <AvatarWrapper>
        <Avatar src={(image = "/assets/Picture.png")} alt={name} />
      </AvatarWrapper>
      <Info>
        <Name>{name}</Name>
        <Since>Cliente desde {since}</Since>
      </Info>
    </Card>
  );
}
