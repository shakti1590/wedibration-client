import { Navbar } from "../components/Navbar";

function SignUp() {
  return (
    <>
      <Navbar/>
      <section className="signup-sec">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-2">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="email" placeholder="Email" name=""/>
                        <input type="password" placeholder="Create Password" name=""/>
                        <input type="button" value="Sign Up"/>
                    </form>
                    <p>Already have an account? <span><a href="/login">Log In</a></span></p>
                    <hr/>
                    <h3>Or Continue With</h3>
                    <div className="social-login">
                        <ul>
                            <li><i className='bx bxl-google' ></i></li>
                            <li><i className='bx bxl-facebook'></i></li>
                            <li><i className='bx bxl-linkedin' ></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

      
     
    </>
  );
}

export default SignUp;
