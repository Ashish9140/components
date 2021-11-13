import './LoanManagement.css'

export const LoanManagement = () => {
    return (
        <>
            <div className="loan-scrolled">
                <div className="loan-manager">
                    <h2>Loan Requests</h2>
                    <hr />
                    <table id="customers">
                        <tr>
                            <th>User Name</th>
                            <th>Account Number</th>
                            <th>Loan Amount</th>
                            <th>Loan Interest</th>
                            <th>Options</th>
                        </tr>
                        <tr>
                            <td>Kamal Sharma</td>
                            <td>365489257603</td>
                            <td>$600</td>
                            <td>7%</td>

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
                            <td>Vivek Kumar</td>
                            <td>376402593670</td>
                            <td>$200</td>
                            <td>5%</td>
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
                            <td>Karan Tiwari</td>
                            <td>57026476754</td>
                            <td>$200</td>
                            <td>3%</td>
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
        </>
    )
}
