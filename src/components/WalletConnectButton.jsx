import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <div className='wallet-connect-modals'>
        <w3m-button className='wallet-connect-button'/>
      <button onClick={() => open({ view: 'Networks' })} className='network-button'>Network</button>
    </div>
  )
}