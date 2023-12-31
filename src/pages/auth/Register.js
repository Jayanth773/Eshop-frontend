import {useState} from 'react'
import styles from "./Auth.module.scss";
import registerImg from "../../assets/register.png";
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import { toast } from 'react-toastify';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/config";
import Loader from '../../components/loader/Loader';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault()
    if(password !== cPassword){
      toast.error("Password do not match.")
    }

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registration Successful...")
    navigate("/login")
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
  }

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form} id=''>
          <h2>Register</h2>

          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Email"
              required  
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
            />
            <input
              type="password" 
              placeholder="Password" 
              required
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              required 
              value={cPassword}
              onChange={(event) => setCPassword(event.target.value)}
            />

            <button className="--btn --btn-primary --btn-block" type='submit'>Register</button>
            
          </form>
          <span className={styles.register}>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="Register" width="400px"/>
      </div>
    </section>
    </>
  )
}

export default Register