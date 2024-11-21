import React from "react";
import "@scss/pages/_auth.scss";

interface AuthUIProps {
    registerName: string;
    registerEmail: string;
    loginEmail: string;
    registerPwd: string;
    loginPwd: string;
    registerRepeatPwd: string;
    registerSuccessMsg?: string;
    loginSuccessMsg?: string;
    registerErrorMsg?: string;
    loginErrorMsg?: string;
    handleRegisterNameChange: React.ChangeEventHandler<HTMLInputElement>;
    handleRegisterEmailChange: React.ChangeEventHandler<HTMLInputElement>;
    handleLoginEmailChange: React.ChangeEventHandler<HTMLInputElement>;
    handleRegisterPwdChange: React.ChangeEventHandler<HTMLInputElement>;
    handleLoginPwdChange: React.ChangeEventHandler<HTMLInputElement>;
    handleRegisterRepeatPwdChange: React.ChangeEventHandler<HTMLInputElement>;
    handleRegisterSubmit: React.FormEventHandler<HTMLFormElement>;
    handleLoginSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default (props: AuthUIProps) => {
    return (
        <div className="wrapper">

            <span className="rotate-bg" />
            <span className="rotate-bg2" />

            <div className="form-box login">
                <h2 className="title animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>Login</h2>
                <form action="#" onSubmit={props.handleLoginSubmit}>
                    <div className="input-box animation"  style={{ '--i': 1, '--j': 22 } as React.CSSProperties}>
                        <input type="email" required 
                            value={props.loginEmail}
                            onChange={props.handleLoginEmailChange}
                        />
                        <label htmlFor="">Email</label>
                        <i className="bx bxs-envelope" />
                    </div>
                    <div className="input-box animation"  style={{ '--i': 2, '--j': 23 } as React.CSSProperties}>
                        <input type="password" required 
                            value={props.loginPwd}
                            onChange={props.handleLoginPwdChange}
                        />
                        <label htmlFor="">Password</label>
                        <i className="bx bxs-lock-alt" />
                    </div>
                    { props.loginErrorMsg && props.loginErrorMsg != "" ? (<p className="error-msg">{props.loginErrorMsg}</p>) : (null) }
                    { props.loginSuccessMsg && props.loginSuccessMsg != "" ? (<p className="success-msg">{props.loginSuccessMsg}</p>) : (null) }
                    <button type="submit" className="btn animation"  style={{ '--i': 3, '--j': 24 } as React.CSSProperties}>Login</button>
                    <div className="linkTxt animation"  style={{ '--i': 5, '--j': 25 } as React.CSSProperties}>
                        <p>Dont have an account? <a href="#" className="register-link">Register</a></p>
                    </div>
                </form>
            </div>
            <div className="info-text login">
                <h2 className="animation"  style={{ '--i': 0, '--j': 20 } as React.CSSProperties}>Welcome Back</h2>
                <p className="animation"  style={{ '--i': 1, '--j': 21 } as React.CSSProperties}>Lorem ipsum dolor amet consectetur adipisicing elit.</p>
            </div>

            <div className="form-box register">
                <h2 className="title animation"  style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>Register</h2>
                <form action="#" onSubmit={props.handleRegisterSubmit}>
                    <div className="input-box animation"  style={{ '--i': 18, '--j': 1 } as React.CSSProperties}>
                        <input type="text" className="optional" placeholder=""
                            value={props.registerName}
                            onChange={props.handleRegisterNameChange}
                        />
                        <label htmlFor="">Username</label>
                        <i className="bx bxs-user" />
                    </div>
                    <div className="input-box animation"  style={{ '--i': 19, '--j': 2 } as React.CSSProperties}>
                        <input type="email" required
                            value={props.registerEmail}
                            onChange={props.handleRegisterEmailChange} 
                        />
                        <label htmlFor="">Email</label>
                        <i className="bx bxs-envelope" />
                    </div>
                    <div className="input-box animation"  style={{ '--i': 20, '--j': 3 } as React.CSSProperties}>
                        <input type="password" required
                            value={props.registerPwd}
                            onChange={props.handleRegisterPwdChange}
                        />
                        <label htmlFor="">Password</label>
                        <i className="bx bxs-lock-alt" />
                    </div>
                    <div className="input-box animation"  style={{ '--i': 21, '--j': 4 } as React.CSSProperties}>
                        <input type="password" className="optional" placeholder=""
                            value={props.registerRepeatPwd}
                            onChange={props.handleRegisterRepeatPwdChange}
                        />
                        <label htmlFor="">Confirm Password</label>
                        <i className="bx bxs-lock-alt" />
                    </div>
                    { props.registerErrorMsg && props.registerErrorMsg != "" ? (<p className="error-msg">{props.registerErrorMsg}</p>) : (null) }
                    { props.registerSuccessMsg && props.registerSuccessMsg != "" ? (<p className="success-msg">{props.registerSuccessMsg}</p>) : (null) }
                    <button type="submit" className="btn animation"  style={{ '--i': 22, '--j': 5 } as React.CSSProperties}>Register</button>
                    <div className="linkTxt animation"  style={{ '--i': 23, '--j': 6 } as React.CSSProperties}>
                        <p>Already have an account? <a href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
            <div className="info-text register">
                <h2 className="animation"  style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>Welcome Back</h2>
                <p className="animation"  style={{ '--i': 18, '--j': 1 } as React.CSSProperties}>Lorem ipsum dolor amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}