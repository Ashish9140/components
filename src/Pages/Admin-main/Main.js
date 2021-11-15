import { Switch, Route } from "react-router-dom";


// Components
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { AdminDashboard } from "components/admin-dashboard/AdminDashboard";
import { SiteSetting } from "components/site-setting/SiteSetting";
import { UserList } from "components/user-list/UserList";
import { Security } from "components/security/Security";
import { Userprofile } from "components/user-profile/Userprofile";
import { CardManagement } from "components/card-management/CardManagement";
import { LoanManagement } from "components/loan-management/LoanManagement";
import { KycManagement } from "components/kyc-management/KycManagement";

export const Main = () => {
    return (
        <div className="user-main-content">
            <Header />

            {/* <AdminDashboard */}
            <div className="user-main">
                <Switch>
                    <Route exact path="/admin" component={AdminDashboard} />
                    <Route exact path="/users" component={UserList} />
                    <Route exact path="/security" component={Security} />
                    <Route exact path="/profile" component={Userprofile} />
                    <Route exact path="/site-setting" component={SiteSetting} />
                    <Route exact path="/card-manager" component={CardManagement} />
                    <Route exact path="/loan-manager" component={LoanManagement} />
                    <Route exact path="/kyc-manager" component={KycManagement} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
