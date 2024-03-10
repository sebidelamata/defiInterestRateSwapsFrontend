import { useEffect, useState, createContext, useContext } from 'react';
import { ethers } from 'ethers';
import { 
    testnetUSDCContractConfig, 
    testnetREPOContractConfig,
    testnetOracleContractConfig,
    testnetPTTokenContractConfig,
    testnetEthereumVaultConnectorConfig,
    testnetRepoPlatformOperatorConfig,
    testnetFixedYieldCollateralVaultConfig 
} from './abis';

const AccountContext = createContext();
const AccountUpdateContext = createContext();
const ProviderContext = createContext();
const ProviderUpdateContext = createContext();

// contract contexts
const USDCContext = createContext();
const repoVaultBorrowableContext = createContext();
const oracleContext = createContext();
const PTTokenContext = createContext();
const EVCContext = createContext();
const repoPlatformOperatorContext = createContext();
const fixedYieldCollateralVaultContext = createContext();

export const useAccount = () => {
    return useContext(AccountContext)
}
export const useAccountUpdate = () => {
    return useContext(AccountUpdateContext)
}
export const useProvider = () => {
    return useContext(ProviderContext)
}
export const useProviderUpdate = () => {
    return useContext(ProviderUpdateContext)
}

// contract contexts
export const useUSDC = () => {
    return useContext(USDCContext)
}
export const useRepoVaultBorrowable = () => {
    return useContext(repoVaultBorrowableContext)
}
export const useOracle = () => {
    return useContext(oracleContext)
}
export const usePTToken = () => {
    return useContext(PTTokenContext)
}
export const useEVC = () => {
    return useContext(EVCContext)
}
export const useRepoPlatformOperator = () => {
    return useContext(repoPlatformOperatorContext)
}
export const useFixedYieldCollateralVault = () => {
    return useContext(fixedYieldCollateralVaultContext)
}


// ethers provider
export const EthersProvider = ({children}) => {

    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)

    // loaded contract states
    const [USDC, setUSDC] = useState(null)
    const [repoVaultBorrowable, setRepoVaultBorrowable] = useState(null)
    const [oracle, setOracle] = useState(null)
    const [PTToken, setPTToken] = useState(null)
    const [EVC, setEVC] = useState(null)
    const [repoPlatformOperator, setRepoPlatformOperator] = useState(null)
    const [fixedYieldCollateralVault, setFixedYieldCollateralVault] = useState(null)

    const loadBlockchainData = async () => {

        const provider = new ethers.BrowserProvider(window.ethereum)
        setProvider(provider)
    
        const network = await provider.getNetwork()

        // load our REPO contracts
        const testnetUSDCContract = new ethers.Contract(
            testnetUSDCContractConfig.address, 
            testnetUSDCContractConfig.abi, 
            provider
        )
        setUSDC(testnetUSDCContract)

        const testnetREPOContract = new ethers.Contract(
            testnetREPOContractConfig.address, 
            testnetREPOContractConfig.abi, 
            provider
        )
        setRepoVaultBorrowable(testnetREPOContract)

        const testnetOracleContract = new ethers.Contract(
            testnetOracleContractConfig.address, 
            testnetOracleContractConfig.abi, 
            provider
        )
        setOracle(testnetOracleContract)

        const testnetPTTokenContract = new ethers.Contract(
            testnetPTTokenContractConfig.address, 
            testnetPTTokenContractConfig.abi, 
            provider
        )
        setPTToken(testnetPTTokenContract)

        const testnetEthereumVaultConnector = new ethers.Contract(
            testnetEthereumVaultConnectorConfig.address, 
            testnetEthereumVaultConnectorConfig.abi, 
            provider
        )
        setEVC(testnetEthereumVaultConnector)

        const testnetRepoPlatformOperator = new ethers.Contract(
            testnetRepoPlatformOperatorConfig.address, 
            testnetRepoPlatformOperatorConfig.abi, 
            provider
        )
        setRepoPlatformOperator(testnetRepoPlatformOperator)

        const testnetFixedYieldCollateralVault = new ethers.Contract(
            testnetFixedYieldCollateralVaultConfig.address, 
            testnetFixedYieldCollateralVaultConfig.abi, 
            provider
        )
        setFixedYieldCollateralVault(testnetFixedYieldCollateralVault)
    
        window.ethereum.on('accountsChanged', async () => {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const account = ethers.utils.getAddress(accounts[0])
          setAccount(account)
        })
      }
    
      useEffect(() => {
        loadBlockchainData()
      }, [])

    return (
        <AccountContext.Provider value={ account }>
            <AccountUpdateContext.Provider value={ setAccount }>
                <ProviderContext.Provider value={ provider }>
                    <ProviderUpdateContext.Provider value={ setProvider }>
                        <USDCContext.Provider value={USDC}>
                            <repoVaultBorrowableContext.Provider value={repoVaultBorrowable}>
                                <oracleContext.Provider value={oracle}>
                                    <PTTokenContext.Provider value={PTToken}>
                                        <EVCContext.Provider value={EVC}>
                                            <repoPlatformOperatorContext.Provider value={repoPlatformOperator}>
                                                <fixedYieldCollateralVaultContext.Provider value={fixedYieldCollateralVault}>
                                                    {children}
                                                </fixedYieldCollateralVaultContext.Provider>
                                            </repoPlatformOperatorContext.Provider>
                                        </EVCContext.Provider>
                                    </PTTokenContext.Provider>
                                </oracleContext.Provider>
                            </repoVaultBorrowableContext.Provider>
                        </USDCContext.Provider>
                    </ProviderUpdateContext.Provider>
                </ProviderContext.Provider>
            </AccountUpdateContext.Provider>
        </AccountContext.Provider>
    );
}
