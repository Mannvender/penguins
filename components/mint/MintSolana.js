import { Box, Heading, Flex, Text } from "rebass";
import { useState, useEffect } from "react";
import styled, { useTheme, css } from "styled-components";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Input from "../Input";
import Button from "../Button";
import MultipleSol from "components/mint/MultipleSol";
import { buttonCss } from "components/Button";

import { WalletMultiButton as WalletButtonBase } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import {
  shortenAddress,
  getCandyMachineState,
  mintOneToken,
  awaitTransactionSignatureConfirmation,
} from "utils/solana";

const treasury = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_TREASURY_ADDRESS
);
const config = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_CONFIG
);
const candyMachineId = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
);
// const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK;
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;
const connection = new anchor.web3.Connection(rpcHost);
// const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)

const WalletMultiButton = styled(WalletButtonBase)`
  ${buttonCss}
`;
export const IceCss = css`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.8);
    filter: blur(10px);
    z-index: -1;
  }
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: relative;
`;
const IceBox = styled(Box)`
  ${IceCss}
  height: max-content;
  min-width: 40% !important;
  border-radius: 3px;
  @media (min-width: 1024px) {
  }
`;

const MintSection = ({}) => {
  const wallet = useWallet();
  const { colors } = useTheme();

  const [balance, setBalance] = useState();
  const [isActive, setIsActive] = useState(true); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [amount, setAmount] = useState(4);
  const [candyMachine, setCandyMachine] = useState();

  const mintOne = async () => {
    try {
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          txTimeout,
          connection,
          "singleGossip",
          false
        );
        console.log(status, "---wallet connected");

        if (!status?.err) {
          toast.success("Congratulations! Mint succeeded!");
        } else {
          toast.error("Mint failed! Please try again!");
        }
      }
    } catch (error) {
      console.log(error);
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      toast.error(message);
    } finally {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    }
  };
  const handleClick = async () => {
    setIsMinting(true);
    const numOfMints = amount || 1;
    try {
      for (let index = 0; index < numOfMints; index++) {
        await mintOne();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      };

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(anchorWallet, candyMachineId, connection);
      console.log(itemsRemaining, "---remaining");

      setIsSoldOut(itemsRemaining === 0);
      // setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, candyMachineId, connection]);

  const handleChange = (e) => setAmount(parseInt(e.target.value));

  return (
    <IceBox p={[4]}>
      <Flex
        my={[1]}
        textAlign="center"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          fontSize={[5, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[3]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Mint with Solana
        </Heading>
        <MultipleSol />
      </Flex>
      <Flex justifyContent="center" textAlign="center" my={[3]}>
        <Box>
          {wallet.connected && (
            <Text fontSize={[3]} color={colors.dark1} mb={[3]}>
              Balance: {(balance || 0).toLocaleString()} SOL
            </Text>
          )}
          <WalletMultiButton />

          <>
            {wallet.connected && (
              <Flex flexDirection="column" my={[4]}>
                <Box
                  sx={{
                    border: `1px solid ${colors.dark2}`,
                    borderRadius: "64px",
                    fontSize: [4, 5],
                  }}
                  mb={[4]}
                >
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={amount}
                    max={20}
                    min={1}
                    placeholder="How many?"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  />
                </Box>
                <Button
                  disabled={isSoldOut || isMinting || !isActive}
                  style={{ width: "100%" }}
                  color={colors.light}
                  onClick={handleClick}
                  disabled={!Boolean(amount)}
                  color1={colors.accent1}
                  color2={colors.accent3}
                >
                  {isSoldOut
                    ? "Sold Out"
                    : isActive
                    ? isMinting
                      ? "Minting..."
                      : "Mint " + (amount || 1)
                    : "Not active"}
                </Button>
              </Flex>
            )}
          </>
        </Box>
      </Flex>
    </IceBox>
  );
};

export default MintSection;
