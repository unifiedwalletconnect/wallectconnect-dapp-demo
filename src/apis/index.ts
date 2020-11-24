import { IApi } from "../helpers/types";
import { EthApi } from "./eth";
import { NeoApi } from "./neo";

const API_CLASSES = {
  ETH: EthApi,
  NEO: NeoApi,
};

export function getApi(chain: string): IApi {
  const apiClass = API_CLASSES[chain];
  if (!apiClass) {
    throw Error(`${chain} api in not supported`);
  }
  const api = new apiClass();
  return api;
}
