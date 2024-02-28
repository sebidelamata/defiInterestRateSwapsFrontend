import erc20Abi from './ERC20.json'; 
import RepoVaultABI from './RepoVault.json'


const testnetUSDCContractConfig = {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    abi: erc20Abi.abi
}

const testnetREPOContractConfig = {
    address: '0x1DDe28cc82e35FcDCAccB9cb34fFc7ec9233682a',
    abi: RepoVaultABI.abi
}

export {testnetUSDCContractConfig, testnetREPOContractConfig}