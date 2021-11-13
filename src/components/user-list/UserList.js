import './UserList.css'
import { useState } from 'react'
import { ProfileModal } from 'components/profile-modal/ProfileModal';

export const UserList = () => {

    const [openModal, setModal] = useState(false);

    return (
        <>
            <div className="user-list">
                <h2>Users</h2>
                <hr />
                <table id="customers">
                    <tr>
                        <th>User Name</th>
                        <th>Account Number</th>
                        <th>Kyc</th>
                        <th>Options</th>
                    </tr>
                    <tr>
                        <td>Kamal Sharma</td>
                        <td>435634573424</td>
                        <td className="kyc-veri">Verified</td>
                        <td>
                            <div className="profile-dropdown">
                                <div>Put Dormant <input type="checkbox" name="" id="" /></div>
                                <div>Put Suspense <input type="checkbox" name="" id="" /></div>
                                <button className="go-profile">Check Profile<i className="las la-angle-double-right"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Vivek Kumar</td>
                        <td>453764564357</td>
                        <td className="kyc-veri">Verified</td>
                        <td>
                            <div className="profile-dropdown">
                                <div>Put Dormant <input type="checkbox" name="" id="" /></div>
                                <div>Put Suspense <input type="checkbox" name="" id="" /></div>
                                <button className="go-profile">Check Profile<i className="las la-angle-double-right"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Karan Tiwari</td>
                        <td>3457347645456</td>
                        <td className="kyc-veri">Verified</td>
                        <td>
                            <div className="profile-dropdown">
                                <div>Put Dormant <input type="checkbox" name="" id="" /></div>
                                <div>Put Suspense <input type="checkbox" name="" id="" /></div>
                                <button className="go-profile">Check Profile<i className="las la-angle-double-right"></i></button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}
