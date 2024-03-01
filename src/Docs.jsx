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
                    If you supply collateral for loans on Aave, you could be earning 10% today and 5% tomorrow if you are not protected. This could potentially lead to a cashflow mismatch between what the user earns on one asset and what they are paying on another.
                    With Repo a user can go short borrow rates. If rates decrease, the user can be protect from decreased cashflows by holding a leveraged long principal position.
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