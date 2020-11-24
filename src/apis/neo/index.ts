import { IApi, IAssetData } from "../../helpers/types";

export class NeoApi implements IApi {
  public async getAssetData(network: string, account: string): Promise<IAssetData[]> {
    return [];
  }
}
