import React, { useState } from "react";
import Button from "components/Button";
import { Heading, Text } from "rebass";
import { useTheme } from "styled-components";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const MnitSolMintInfo = ({}) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpenModal} color={colors.light2}>
        How to mint multiple ?
      </Button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          modal: { borderRadius: "0.5rem", backgroundColor: colors.dark1 },
        }}
      >
        <Heading mb={[3]} color={colors.light}>
          How to mint multiple flawlessly
        </Heading>
        <Text color={colors.light1}>
          We are using Metaplex Candy Machine. It is not possible to mint
          multiple tokens with one transaction. So if you are going to mint N
          tokens then you'll have to approve N transactions from your wallet.
          <br />
          <br />
          If you are okay with multiple approval requests then you don't need to
          do anything.
          <br />
          <br />
          Else you'll have to give us auto approval access to your wallet. How
          to enable auto approval on Phantom Wallet:
          <ol>
            <li>Open wallet</li>
            <li>Click on Settings icon</li>
            <li>Click on "Trusted Apps" section</li>
            <li>
              Check "Auto-approve" for{" "}
              <strong>https://polarpenguins.co/</strong>
            </li>
            <li>Mint multiple tokens</li>
            <li>Uncheck "Auto-approve" permission</li>
          </ol>
        </Text>
      </Modal>
    </>
  );
};

export default MnitSolMintInfo;
