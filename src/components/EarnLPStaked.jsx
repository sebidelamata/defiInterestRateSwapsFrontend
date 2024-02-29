import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { testnetREPOContractConfig } from "../../abis";

const EarnLPStaked = ({numUserRLPShares, setPreviewRedeem}) => {

    const previewRedeem = useReadContract({
        address: testnetREPOContractConfig.address,
        abi: testnetREPOContractConfig.abi,
        functionName: "previewRedeem",
        args: [parseInt(numUserRLPShares.data) * 10**-6],
        watch: true,
        chainId:14997,
    });
    console.log(previewRedeem)
    useEffect(() => {
        setPreviewRedeem(previewRedeem.data)
    },[previewRedeem.data])

    return(
        <div className="earn-lp-staked">
            <div className="earn-lp-staked-title">Staked Value:</div>
            <div className="earn-lp-staked-amount">{`${parseInt(previewRedeem.data)} $USDC`}</div>
        </div>
    )
}

export default EarnLPStaked