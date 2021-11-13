import './KycManagement.css'
import aadharcard from '../../assets/aadharcard.jpg';
import pancard from '../../assets/pancard.jpg';

export const KycManagement = () => {
    return (
        <div className="kyc-scrolled">
            <div className="kyc-manager">
                <h2>Kyc Requests</h2>
                <hr />
                <table id="customers">
                    <tr>
                        <th>User Name</th>
                        <th>Account Number</th>
                        <th>Kyc Document</th>
                        <th>Options</th>
                    </tr>
                    <tr>
                        <td>Vivek Kumar</td>
                        <td>365489257603</td>
                        <td>
                            <div className="kyc-img">
                                <img src={aadharcard} alt="loading" />
                            </div>
                        </td>
                        <td>
                            <div className="profile-dropdown">
                                <button type="submit" className="card-manager-btn">Accept Request</button>
                                <div>
                                    <button className="go-profile">Check Profile<i className="las la-angle-double-right"></i></button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Kamal Sharma</td>
                        <td>365489257603</td>
                        <td>
                            <div className="kyc-img">
                                <img src={pancard} alt="loading" />
                            </div>
                        </td>
                        <td>
                            <div className="profile-dropdown">
                                <button type="submit" className="card-manager-btn">Accept Request</button>
                                <div>
                                    <button className="go-profile">Check Profile<i className="las la-angle-double-right"></i></button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
