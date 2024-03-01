import erc20Abi from './ERC20.json'; 
import RepoVaultABI from './RepoVault.json'
import oracleABI from './PtUsdOracle.json'
import PTTokenABI from './IPPrincipalToken.json'
import EthereumVaultConnectorABI from './EthereumVaultConnector.json'
import FixedYieldCollateralVaultABI from './FixedYieldCollateralVault.json'
import RepoPlatformOperatorABI from './RepoPlatformOperator.json'
import RepoVaultBorrowableABI from './RepoVaultBorrowable.json'


const testnetUSDCContractConfig = {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    abi: erc20Abi.abi
}

const testnetREPOContractConfig = {
    address: '0xA058F6E14242092Ad57f407A71dC1Eb1313A2Ad4',
    abi: RepoVaultABI.abi
}

const testnetOracleContractConfig = {
    address: '0x6cBDf39b170295e22ffd541aBEBD88F53Cded7ea',
    abi: oracleABI.abi
}

const testnetPTTokenContractConfig = {
    address: '0xb72b988CAF33f3d8A6d816974fE8cAA199E5E86c',
    abi: PTTokenABI.abi
}

const testnetEthereumVaultConnectorConfig = {
    address: '0x1f63215Dd03836818a69b6E6bdd70F27d4dB1Ab0',
    abi: EthereumVaultConnectorABI.abi
}

const testnetRepoPlatformOperatorConfig = {
    address: '0xcfC4c0d3267e931412301016b9c7302cCf7f0dc8',
    abi: RepoPlatformOperatorABI.abi
}

const testnetFixedYieldCollateralVaultConfig = {
    address: '0xdEad8922cf151774ACF2CFb9D42B1E56f87C768F',
    abi: FixedYieldCollateralVaultABI.abi
}

const testnetRepoVaultBorrowableConfig = {
    address: '0xA058F6E14242092Ad57f407A71dC1Eb1313A2Ad4',
    abi: RepoVaultBorrowableABI.abi
}

export {
    testnetUSDCContractConfig, 
    testnetREPOContractConfig, 
    testnetOracleContractConfig, 
    testnetPTTokenContractConfig,
    testnetEthereumVaultConnectorConfig,
    testnetRepoPlatformOperatorConfig,
    testnetFixedYieldCollateralVaultConfig,
    testnetRepoVaultBorrowableConfig
}