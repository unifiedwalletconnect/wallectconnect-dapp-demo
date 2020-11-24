import * as ethUtil from "ethereumjs-util";
import { convertUtf8ToHex } from "@unifiedwalletconnect/utils";
import { SUPPORTED_CHAINS, SUPPORTED_NETWORKS } from "../constants";

export function ellipseAddress(address = "", width = 10): string {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export function sanitizeHex(hex: string): string {
  hex = hex.substring(0, 2) === "0x" ? hex.substring(2) : hex;
  if (hex === "") {
    return "";
  }
  hex = hex.length % 2 !== 0 ? "0" + hex : hex;
  return "0x" + hex;
}

export function getChainData(chain: string) {
  const chainData = SUPPORTED_CHAINS.filter(chainData => chainData.chain === chain)[0];

  if (!chainData) {
    throw new Error("Chain missing or not supported");
  }
  return chainData;
}

export function getNetworkData(chain: string, network: string) {
  const networkData = SUPPORTED_NETWORKS.filter(
    networkData => networkData.chain === chain && networkData.network === network,
  )[0];

  if (!networkData) {
    throw new Error("Chain or network missing or not supported");
  }
  return networkData;
}

export function encodePersonalMessage(msg: string): string {
  const data = ethUtil.toBuffer(convertUtf8ToHex(msg));
  const buf = Buffer.concat([
    Buffer.from("\u0019Ethereum Signed Message:\n" + data.length.toString(), "utf8"),
    data,
  ]);
  return ethUtil.bufferToHex(buf);
}

export function hashPersonalMessage(msg: string): string {
  const data = encodePersonalMessage(msg);
  const buf = ethUtil.toBuffer(data);
  const hash = ethUtil.keccak256(buf);
  return ethUtil.bufferToHex(hash);
}
