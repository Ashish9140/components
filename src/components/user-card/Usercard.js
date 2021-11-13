import './Usercard.css'

export const Usercard = () => {
    return (
        <div className="user-card">
            <h2>User Card</h2>
            <hr />
            <form>
                <div className="form-group">
                    <label>Type Of Account</label>
                    <div>
                        <select name="" id="" required>
                            <option>Saving</option>
                            <option>Current</option>
                            <option>Fixed</option>
                            <option>Checking</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Card Brand</label>
                    <div>
                        <select name="" id="" required>
                            <option>Master Card</option>
                            <option>Visa Card</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Card Type</label>
                    <div>
                        <select name="" id="" required>
                            <option>Credit</option>
                            <option>Debit</option>
                        </select>
                    </div>
                </div>

                <div className="user-card-btn">
                    <button type="submit">Apply For Card</button>
                </div>
            </form>
        </div>
    )
}
