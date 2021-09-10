import { Box, Heading, Flex } from "rebass";
import { useState } from "react";
import styled, { useTheme, css } from "styled-components";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { FaExternalLinkAlt } from "react-icons/fa";
import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import { address, abi, price } from "ethContract";
import { DEFAULT_ERROR_MESSAGE } from "messages";
import { LinkExternal as Link } from "../Links";

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

const MintSection = ({ ethAddress }) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [amount, setAmount] = useState(8);

  const handleClick = async () => {
    const web3 = window.web3;
    if (!web3 || !ethAddress) {
      toast.error("Please connect your wallet.");
      if (isMobile) router.push("/mint#connect-wallet");
    } else {
      try {
        const contract = new web3.eth.Contract(abi, address);
        await contract.methods
          .mintKoalas(ethAddress, amount)
          .send(
            { from: ethAddress, value: price * amount },
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
      if (parsedVal <= 18 && parsedVal > 0) {
        setAmount(parsedVal);
      } else {
        toast.error("Amount should be between 1 and 18.");
      }
    } else {
      setAmount(value);
    }
  };

  return (
    <IceBox p={[3]}>
      <Box my={[1]} textAlign="center">
        <Heading
          fontSize={[5, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[3]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Mint (20 max/txn)
        </Heading>
      </Box>
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
      <Flex justifyContent="center" mb={[3]}>
        <Button
          style={{ width: "100%" }}
          color={colors.light}
          onClick={handleClick}
          disabled={!Boolean(amount)}
        >
          Mint
        </Button>
      </Flex>
    </IceBox>
  );
};

export default MintSection;
