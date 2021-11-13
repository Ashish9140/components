import './CardManagement.css'

export const CardManagement = () => {
    return (
        <>
            <div className="card-scrolled">
                <div className="card-manager">
                    <h2>Card Requests</h2>
                    <hr />
                    <table id="customers">
                        <tr>
                            <th>User Name</th>
                            <th>Account Number</th>
                            <th>Card Type</th>
                            <th>Card Brand</th>
                            <th>Options</th>
                        </tr>
                        <tr>
                            <td>Kamal Sharma</td>
                            <td>365489257603</td>
                            <td>Debit</td>
                            <td>Master Card</td>
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
                            <td>Credit</td>
                            <td>Master Card</td>
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
                            <td>Debit</td>
                            <td>Visa Card</td>
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
