import erc20Abi from './ERC20.json'; 
import RepoVaultABI from './RepoVault.json'
import oracleABI from './PtUsdOracle.json'


const testnetUSDCContractConfig = {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    abi: erc20Abi.abi
}

const testnetREPOContractConfig = {
    address: '0xFb78eee800551EFDd6F742E3204D2E807220F140',
    abi: RepoVaultABI.abi
}

const testnetOracleContractConfig = {
    address: '0x99f115d6EE90CBBB619Aa8a31CCde2EF89Fd41D2',
    abi: oracleABI.abi
}

export {testnetUSDCContractConfig, testnetREPOContractConfig, testnetOracleContractConfig}