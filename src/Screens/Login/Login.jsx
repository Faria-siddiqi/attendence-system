import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import styles from './Login.module.scss';

const Login = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Login page"
    }, [])

    function loginFunc() {
        console.log(name, email, password);
    }
    return (
        <div className={styles.main_contact}>
            <Row>
                <Col sm={12} md={6}>
                    <div className={styles.content}>
                        <h2>
                            Student <span>Login</span>
                        </h2>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className={styles.form}>
                        <div>
                            <span>Email</span>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                        </div>
                        <div>
                            <span>Password</span>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                        </div>
                        <div>
                            <button onClick={loginFunc}>Login</button>
                        </div>
                        <p>Forgotten password?</p>
                        <p>Create an account <Link to="/register">Here</Link></p>
                    </div>
                </Col>
            </Row>
        </div>)
}

export default Login;

{/* <div>
    <span>Username</span>
    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your username' />
</div> */}