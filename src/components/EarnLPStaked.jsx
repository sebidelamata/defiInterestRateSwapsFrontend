import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { testnetREPOContractConfig } from "../../abis";

const EarnLPStaked = ({numUserRLPShares, previewRedeem, setPreviewRedeem}) => {

    console.log(parseInt(numUserRLPShares) * 10**-6)
    const previewRedeemFetch = useReadContract({
        address: testnetREPOContractConfig.address,
        abi: testnetREPOContractConfig.abi,
        functionName: "previewRedeem",
        args: [parseInt(numUserRLPShares) * 10**-6],
        watch: true,
        chainId:14997,
    });
    console.log(previewRedeemFetch)
    useEffect(() => {
        if(previewRedeemFetch.data !== null && previewRedeemFetch.data !== undefined){
            setPreviewRedeem(previewRedeemFetch.data)
        }
    },[previewRedeemFetch.data])
    console.log(previewRedeem)
    return(
        <div className="earn-lp-staked">
            <div className="earn-lp-staked-title">Staked Value:</div>
            <div className="earn-lp-staked-amount">{`${parseInt(previewRedeem)} $USDC`}</div>
        </div>
    )
}

export default EarnLPStaked