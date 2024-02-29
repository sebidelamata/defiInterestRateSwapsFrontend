import Navbar from "./components/Navbar"

const Docs = () => {
    return(
        <div className="docs-container">
            <Navbar />
            <div className="docs-body">
                <div className="docs-title">Docs</div>
            </div>
            <div className="docs-description">
                <h1 className="docs-description-title"> What is Repo?</h1>
                <div className="docs-description-body">
                    Repo offers users the ability to hedge variable interest rate volatility.
                    If you have a loan on Aave, you could be paying 5% today and 10% tomorrow if you are not protected.
                    With Repo a user can go long or short borrow rates. If borrow rates increase and the user is long rates, they can protect their debt position from interest rate volatiltiy, and do this efficiently though the use of leverage.
                </div>
                <br />
                <h1 className="docs-description-title">How does Repo do this?</h1>
                <div className="docs-description-body">Repo uses Pendle Finance to help the liquidity pool offer leveraged exposure to interest rates. A user can deposit USDC and go long on the PT for that respective asset, choosing the amount of leverage and expiration appropriate to their unique financial exposures.</div>
                <br />
                <h1 className="docs-description-title">RepoLend</h1>
                <div className="docs-description-body">RepoLend is a feature of Repo that allows users to meet needs for short-term liquidity by allowing users to post their PT aUSD for a period up to the token expiry and borrow USDC against it.</div>
                <br />
                <h1 className="docs-description-title">Providing Liquidity on Repo</h1>
                <div className="docs-description-body">Users can earn yield by providing USDC to the lending pool and Receiving $RLP in return.</div>
            </div>
        </div>
    )
}

export default Docs