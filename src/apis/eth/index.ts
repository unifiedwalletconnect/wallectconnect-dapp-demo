import axios, { AxiosInstance } from "axios";
import { IEthApi, IAssetData, IGasPrices } from "../../helpers/types";
import { getNetworkData } from "../../helpers/utilities";

const api: AxiosInstance = axios.create({
  baseURL: "https://ethereum-api.xyz",
  timeout: 30000, // 30 secs
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export class EthApi implements IEthApi {
  public async getAssetData(network: string, account: string): Promise<IAssetData[]> {
    return [];
  }

  public async getNonce(network: string, account: string): Promise<string> {
    const networkData = getNetworkData("ETH", network);
    const response = await api.get(
      `/account-nonce?address=${account}&chainId=${networkData.chainId}`,
    );
    const { result } = response.data;
    return result;
  }

  public async getGasPrices(network: string): Promise<IGasPrices> {
    const response = await api.get(`/gas-prices`);
    const { result } = response.data;
    return result;
  }
}
