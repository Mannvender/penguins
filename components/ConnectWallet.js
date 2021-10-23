import { useState } from "react";
import styled, { useTheme, css } from "styled-components";
import { Box, Flex, Heading } from "rebass";
import Image from "next/image";
import Button from "components/Button";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SquareButton from "components/SquareButton";
import { shortenAddress } from "utils/solana";

const StyledI = styled.i`
  margin: 0 8px;
  position: relative;
  width: 24px;
  height: 24px;
`;
const ConnectWallet = ({
  ethAddress,
  ethAddressWC,
  handleWalletConnect,
  handleMetamaskConnect,
}) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleMetamaskClick = () => {
    onCloseModal();
    handleMetamaskConnect();
  };
  const handleWalletConnectClick = () => {
    onCloseModal();
    handleWalletConnect();
  };
  return (
    <>
      <Flex justifyContent="center" mb={[4]}>
        {!ethAddress && !ethAddressWC && (
          <Button color={colors.light} onClick={onOpenModal}>
            Select Wallet
          </Button>
        )}
        {ethAddress && (
          <Button color={colors.light} onClick={onOpenModal}>
            <StyledI>
              <Image
                quality="60"
                src="/metamask.png"
                alt="metamask-round"
                layout="fill"
              />
            </StyledI>
            {shortenAddress(ethAddress)}
          </Button>
        )}
        {ethAddressWC && (
          <Button color={colors.light} onClick={onOpenModal}>
            <StyledI>
              <Image
                quality="60"
                src="/wallet_connect_icon.png"
                alt="wallet-connect"
                layout="fill"
              />
            </StyledI>
            {shortenAddress(ethAddressWC)}
          </Button>
        )}
      </Flex>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          modal: {
            borderRadius: "0.5rem",
            backgroundColor: colors.dark1,
            maxWidth: "400px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          closeButton: {
            fill: colors.dark2,
          },
        }}
      >
        <Heading mb={[3]} color={colors.light} fontSize={[5]} px={[4]}>
          Connect Wallet
        </Heading>
        <Flex flexDirection="column">
          <SquareButton onClick={handleMetamaskClick}>
            Metamask
            <StyledI>
              <Image
                quality="60"
                src="/metamask.png"
                alt="metamask-round"
                layout="fill"
              />
            </StyledI>
          </SquareButton>
          <SquareButton onClick={handleWalletConnectClick}>
            Wallet Connect
            <StyledI>
              <Image
                quality="60"
                src="/wallet_connect_icon.png"
                alt="wallet-connect"
                layout="fill"
              />
            </StyledI>
          </SquareButton>
        </Flex>
      </Modal>
    </>
  );
};

export default ConnectWallet;
