import { Switch, Route } from "react-router-dom";


// Components
import { Dashboard } from 'components/dashboard/Dashboard';
import { Header } from 'components/header/Header';
import { Kyc } from 'components/kyc/Kyc';
import { Security } from 'components/security/Security';
import { Transfer } from 'components/transfer/Transfer';
import { Footer } from 'components/footer/Footer';
import { Userprofile } from 'components/user-profile/Userprofile';
import { Usercard } from 'components/user-card/Usercard';
import { Loan } from 'components/loan/Loan';
import { TransactionHistory } from "components/transaction-history/TransactionHistory";

export const Main = () => {
    return (
        <div className="user-main-content">
            <Header />
            <div className="user-main">
                <Switch>
                    <Route exact path="/user" component={Dashboard} />
                    <Route exact path="/transfer" component={Transfer} />5t
                    <Route exact path="/history" component={TransactionHistory} />
                    <Route exact path="/profile" component={Userprofile} />
                    <Route exact path="/card" component={Usercard} />
                    <Route exact path="/loan" component={Loan} />
                    <Route exact path="/kyc" component={Kyc} />
                    <Route exact path="/security" component={Security} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
