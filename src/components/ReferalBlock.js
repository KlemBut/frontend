
const ReferalBlock = () => {
    
    return(
        <div className="referalWrapper">
            <div className="headerWrapper">
                <h1>REFER FRIENDS AND GET REWARDS</h1>
            </div>
            <div className="paragraphWrapper">
                <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
            </div>
            <div className="emailInputWrapper">
                <span>Your email is confirmed!</span>
                <label>
                    <input type="text" placeholder="Enter your email address" />
                </label>
                <button>Get Referal Link</button>
            </div>
            <div className="bottomWrapper">
                <span>Limits on max rewards apply.</span>
            </div>
        </div>
    )
}

export default ReferalBlock