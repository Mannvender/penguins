import { Box, Heading, Flex, Text } from "rebass";
import { useState, useEffect } from "react";
import styled, { useTheme, css, createGlobalStyle } from "styled-components";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { FaExternalLinkAlt } from "react-icons/fa";
import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import { address, abi } from "ethContract";
import { DEFAULT_ERROR_MESSAGE } from "messages";
import { LinkExternal as Link } from "../Links";
import ConnectWallet from "components/ConnectWallet";
import { useFlags } from "@happykit/flags/client";

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

const MintSection = ({ date: mintDate }) => {
  const { flags } = useFlags();
  const { colors } = useTheme();
  const [amount, setAmount] = useState(4);
  const [ethAddressWC, setEthAddressWC] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [supplyStats, setStats] = useState({});
  const isMintActive = mintDate < new Date() || flags?.presale || flags?.ethMint;

  const connectMetamask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        const conn = await window.ethereum.enable();
        const ethconnected = conn.length > 0;
        if (ethconnected) {
          const address = conn[0]; // get wallet address
          console.log("Metamask extension found ,ethAddress =>> ", address);
        }
      } catch (err) {
        if (err.code === 4001)
          toast.error("Please click on metamask icon to connect.");
        else if (err.code === -32002) {
          toast.info(
            "You'll find connection req when you click on Metamask extension"
          );
        } else {
          toast.error(DEFAULT_ERROR_MESSAGE);
        }
      }
      window.web3.eth.getAccounts().then((ethAddresses) => {
        if (ethAddresses[0]) {
          setEthAddress(ethAddresses[0]);
          toast.success("Metamask connected successfully.");
        }
      });
    } else {
      toast.error("Install Metamask extension and try again.");
    }
  };

  const walletConnectInit = async () => {
    try {
      //  Create WalletConnect Provider
      const provider = new WalletConnectProvider({
        infuraId: "6b01117d96bd429bb6e34da9c8646ff2",
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      //  Create Web3 instance
      const web3 = new Web3(provider);
      window.web3 = web3;
      const ethAddresses = await web3.eth.getAccounts();
      // console.log('Wallet connect addresses found: ', ethAddresses)
      if (ethAddresses[0]) {
        setEthAddressWC(ethAddresses[0]);
        toast.success("Wallet connected successfully.");
      }
    } catch (err) {
      console.log("Error while connecting to Wallet Connect : ", err);
      if (err?.message?.includes("User closed modal"))
        toast.error(
          "Please keep the modal open while your wallet is connecting."
        );
      else toast.error(err?.message || DEFAULT_ERROR_MESSAGE);
    }
  };

  const handleMetamaskConnect = () => {
    setEthAddressWC("");
    connectMetamask();
  };

  const handleWalletConnect = () => {
    setEthAddress("");
    walletConnectInit();
  };

  useEffect(() => {
    connectMetamask();
    // cleanup
    return () => {
      window.web3 = undefined;
    };
  }, []);

  useEffect(() => {
    const fetchSupplyStats = async () => {
      const web3 = window.web3;
      try {
        if (web3) {
          const contract = new web3.eth.Contract(abi, address);
          const totalSupply = await contract.methods.totalSupply().call();
          const COST = await contract.methods.cost().call();
          const MAX_MINT_PER_TXN = await contract.methods
            .maxMintAmount()
            .call();
          setStats({ totalSupply, COST, MAX_MINT_PER_TXN });
        }
      } catch (error) {
        console.log("error at contract end", error);
        toast.error(error.message || DEFAULT_ERROR_MESSAGE);
      }
    };

    if (ethAddress || ethAddressWC) fetchSupplyStats();
  }, [ethAddress, ethAddressWC]);

  const handleClick = async () => {
    const web3 = window.web3;
    if (!web3 || !ethAddress) {
      toast.error("Please connect your wallet.");
    } else {
      try {
        const contract = new web3.eth.Contract(abi, address);
        await contract.methods
          .mint(amount)
          .send(
            { from: ethAddress, value: supplyStats.COST * amount },
            async function (error, transactonHash) {
              console.log("transaction hash", transactonHash);
              if (transactonHash)
                toast.info(
                  "Transanction sent to Ethereum Network! Confirmation may take some time."
                );
            }
          );
      } catch (error) {
        console.log("error at contract end", error);
        if (error.message.includes("User denied transaction"))
          toast.error("Oops you have rejected transaction!");
        else toast.error(error.message || DEFAULT_ERROR_MESSAGE);
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length) {
      const parsedVal = parseInt(value);
      if (parsedVal <= 20 && parsedVal > 0) {
        setAmount(parsedVal);
      } else {
        toast.error("Amount should be between 1 and 18.");
      }
    } else {
      setAmount(value);
    }
  };

  if (!isMintActive)
    return (
      <Heading color={colors.light} fontSize={[4, 6]}>
        Sale is not live yet!
      </Heading>
    );
  return (
    <IceBox p={[4]}>
      <Box my={[1]} textAlign="center">
        <Heading
          fontSize={[5, 6]}
          fontWeight={[600]}
          px={[4]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Mint with Ethereum
        </Heading>
        {supplyStats.MAX_MINT_PER_TXN && <Text mb={[4]}>(20 max/txn)</Text>}
      </Box>
      <ConnectWallet
        handleMetamaskConnect={handleMetamaskConnect}
        handleWalletConnect={handleWalletConnect}
        ethAddress={ethAddress}
        ethAddressWC={ethAddressWC}
      />
      {(ethAddress || ethAddressWC) && (
        <>
          <Flex alignItems="center" flexDirection="column" my={[4]}>
            <Box
              sx={{
                border: `1px solid ${colors.dark2}`,
                borderRadius: "64px",
                fontSize: [4, 5],
              }}
              mb={[4]}
              maxWidth={["400px"]}
              width="100%"
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
              style={{ width: "100%" }}
              color={colors.light}
              onClick={handleClick}
              disabled={!Boolean(amount)}
              color1={colors.accent4}
              color2={colors.accent5}
            >
              Mint
            </Button>
          </Flex>
        </>
      )}
    </IceBox>
  );
};

export default MintSection;
