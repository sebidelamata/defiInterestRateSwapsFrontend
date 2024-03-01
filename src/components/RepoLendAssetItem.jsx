import { useState, useEffect } from "react";
import { useReadContracts } from "wagmi";
import RepoLendAssetApprove from "./RepoLendAssetApprove";
import RepoLendAssetLend from "./RepoLendAssetLend";
import RepoLendAssetBorrow from "./RepoLendAssetBorrow";

const RepoLendAssetItem = ({address, config, assetString, type}) => {

    const [userBalanceAndDecimals, setUserBalanceAndDecimals] = useState([])
    const [approved, setApproved] = useState(null)
    const [value, setValue] = useState(0)
    console.log(value)
    const fetchResults = useReadContracts({
        contracts: [
            {
                address: config.address,
                abi: config.abi,
                functionName: "balanceOf",
                args: [address],
                watch: true,
                chainId:14997,
            },
            {
                address: config.address,
                abi: config.abi,
                functionName: "decimals",
                args: [],
                watch: true,
                chainId:14997,
            },
        ]
    });
    console.log(fetchResults)
    useEffect(() => {
        if(fetchResults.data !== null && fetchResults.data !== undefined && fetchResults.data[0] !== null && fetchResults.data[0] !== undefined && fetchResults.data[1] !== null && fetchResults.data[1] !== undefined){
            console.log('hi')
            // need to multiply by decimal arg 
            setUserBalanceAndDecimals(parseInt(fetchResults.data[0], fetchResults.data[1]))
        }
    }, [fetchResults.data])
    
    return(
       <div className="repo-lend-asset-deposit">
            <div className="repo-lend-asset-deposit-left">
                <div className="lend-list-title">
                    {assetString}
                </div>
            </div>
            <div className="repo-lend-asset-deposit-right">
                <div className="lend-balance-and-max">
                    <div className="lend-balance">
                        {`${userBalanceAndDecimals[0] * userBalanceAndDecimals[1] || 0} ${assetString}`}
                    </div>
                    <button onClick={() => setValue(userBalanceAndDecimals[0] * userBalanceAndDecimals[1] || 0)}>Max</button>
                </div>
                <div className="repo-lend-asset-deposit-bottom-right">
                    <form className="lend-list-deposit-modal">
                        <input name="value" placeholder='0' required value={value} onChange={(e) => setValue(e.target.value)}/>
                    </form>
                    {
                        type === 'lend' &&
                        approved === null &&
                        <RepoLendAssetApprove config={config} approved={approved} setApproved={setApproved} value={value}/>
                    }
                    {
                        type === 'lend' &&
                        // change this back when network is up
                        // approved !== null &&
                        <RepoLendAssetLend assetString={assetString} config={config} value={value}/>
                    }
                    {
                        type === 'borrow' &&
                        approved === null &&
                        <RepoLendAssetApprove config={config} approved={approved} setApproved={setApproved} value={value}/>
                    }
                    {
                        type === 'borrow' &&
                        // change this back when network is up
                        // approved !== null &&
                        <RepoLendAssetBorrow assetString={assetString} config={config} value={value}/>
                    }
                </div>
            </div>
       </div>
    )
}

export default RepoLendAssetItem