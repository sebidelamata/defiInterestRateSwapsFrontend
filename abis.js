import erc20Abi from './ERC20.json'; 
import RepoVaultABI from './RepoVault.json'


const testnetUSDCContractConfig = {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    abi: erc20Abi.abi
}

const testnetREPOContractConfig = {
    address: '0x2e3aFd34fa0C2EefD22902603B58AdC43f08A68D',
    abi: RepoVaultABI.abi
}

export {testnetUSDCContractConfig, testnetREPOContractConfig}