import erc20Abi from './ERC20.json'; 
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
    address: '0x67878578463A985398059f32F73d98462f25aC23',
    abi: RepoVaultBorrowableABI.abi
}

const testnetOracleContractConfig = {
    address: '0x56FA06B9Fd91845Ca48f49c6cB05a966a509CbBE',
    abi: oracleABI.abi
}

const testnetPTTokenContractConfig = {
    address: '0xb72b988CAF33f3d8A6d816974fE8cAA199E5E86c',
    abi: PTTokenABI.abi
}

const testnetEthereumVaultConnectorConfig = {
    address: '0xb18F31145F2865a943957D22b9Da1c93C80aDa47',
    abi: EthereumVaultConnectorABI.abi
}

const testnetRepoPlatformOperatorConfig = {
    address: '0x6C7c749E83676Af6EAF1E60FE384C2225fdf9Bd4',
    abi: RepoPlatformOperatorABI.abi
}

const testnetFixedYieldCollateralVaultConfig = {
    address: '0xE07EfD64a9de62d4eEa5B372876EBfC3d2D78D2e',
    abi: FixedYieldCollateralVaultABI.abi
}

export {
    testnetUSDCContractConfig, 
    testnetREPOContractConfig, 
    testnetOracleContractConfig, 
    testnetPTTokenContractConfig,
    testnetEthereumVaultConnectorConfig,
    testnetRepoPlatformOperatorConfig,
    testnetFixedYieldCollateralVaultConfig,
}