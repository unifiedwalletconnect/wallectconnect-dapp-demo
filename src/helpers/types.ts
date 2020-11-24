export interface IAssetData {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
  balance?: string;
}

export interface IApi {
  getAssetData(network: string, account: string): Promise<IAssetData[]>;
}

export interface IGasPrice {
  time: number;
  price: number;
}

export interface IGasPrices {
  timestamp: number;
  slow: IGasPrice;
  average: IGasPrice;
  fast: IGasPrice;
}

export interface IEthApi extends IApi {
  getNonce(network: string, account: string): Promise<string>;
  getGasPrices(network: string): Promise<IGasPrices>;
}
