
export const ProfileModal = () => {
    return (
        <div class="profile-modal">
            <form>
                <div class="input-group">
                    <div>
                        <label>First Name</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                </div>
                <div class="input-profile">
                    <label>Choose Prodile</label>
                    <div>
                        <input type="file" required="required" />
                    </div>
                </div>
                <div class="input-group">
                    <div>
                        <label>Email</label>
                        <div>
                            <input type="email" required="required" />
                        </div>
                    </div>
                    <div>
                        <label>Residencial Address</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <div>
                        <label>Apartment/Unit No</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                    <div>
                        <label>Date Of Birth</label>
                        <div>
                            <input type="date" required="required" />
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <div>
                        <label>Phone Number</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                    <div>
                        <label>Gender</label>
                        <div>
                            <select name="" id="" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <div>
                        <label>City/Town</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                    <div>
                        <label>State</label>
                        <div>
                            <input type="text" required="required" />
                        </div>
                    </div>
                </div>
                <div class="profile-modal-btn">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
