import erc20Abi from './ERC20.json'; 
import RepoVaultABI from './RepoVault.json'


const testnetUSDCContractConfig = {
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    abi: erc20Abi.abi
}

const testnetREPOContractConfig = {
    address: '0x900F4e8e26bBC37A0E8e069C5587946F7Bc91eEB',
    abi: RepoVaultABI.abi
}

export {testnetUSDCContractConfig, testnetREPOContractConfig}