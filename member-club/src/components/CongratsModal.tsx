// components/CongratsModal.tsx
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  z-index: 10000; /* maior que tudo */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

type Props = {
  onClose: () => void;
};

export function CongratsModal({ onClose }: Props) {
  return (
    <Overlay>
      <ModalBox>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>🎉 Parabéns!</h2>
        <p>Você completou todos os cortes do cartão fidelidade!</p>
      </ModalBox>
    </Overlay>
  );
}
