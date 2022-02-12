import "./farmerSetting.scss";
import {changePassword} from '../../redux/actions/usersAction'
export default function FarmersSetting() {
  return (
    <div className="farmerSetting">
      <h1>Setting</h1>
      <form action="">
        <div className="form__field">
          <label>Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form__field">
          <label>Phone Number</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form__field">
          <label>Email</label>
          <input type="email" placeholder="email address" readOnly />
        </div>
        <div className="form__field">
          <label>Address</label>
          <input type="text" placeholder="" />
        </div>

        <div className="form__field">
          <label>Photo</label>
          <input type="file" placeholder="" />
          <p>File size limit: 1MB</p>
        </div>
        <div className="form_submit">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
      <form action="" className="" className="password-form">
        <p>you can also change or update your password below</p>
        <span>** password and confirm password must be same</span>
      <div className="form__field">
          <label>Password</label>
          <input type="password" placeholder="new password" />
        </div>
        <div className="form__field">
          <label>Confirm Password</label>
          <input type="password" placeholder="retype password" />
        </div>
        <div className="form_submit">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
