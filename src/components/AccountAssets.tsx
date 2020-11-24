import * as React from "react";
import Column from "./Column";
import AssetRow from "./AssetRow";
import { IAssetData } from "../helpers/types";

interface IAccountAssetsProps {
  assets: IAssetData[];
}

const AccountAssets = (props: IAccountAssetsProps) => {
  const { assets } = props;
  return (
    <Column center>
      {assets.map(asset => (
        <AssetRow key={asset.symbol} asset={asset} />
      ))}
    </Column>
  );
};

export default AccountAssets;
