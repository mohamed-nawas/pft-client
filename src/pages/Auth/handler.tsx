import { useAppDispatch } from "@redux/hooks";
import React from "react";
import { useHistory } from "react-router-dom";
import * as apis from './api';
import { userActions } from "@redux/user/userSlice";

interface registerState {
    registerName: string;
    registerEmail: string;
    registerPwd: string;
    registerRepeatPwd: string;
    registerSuccessMsg: string;
    registerErrorMsg: string;
}

interface loginState {
    loginEmail: string;
    loginPwd: string;
    loginSuccessMsg: string;
    loginErrorMsg: string;
}

interface registerHandler {
    handleRegisterNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRegisterEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRegisterPwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRegisterRepeatPwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface loginHandler {
    handleLoginEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLoginPwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useRegister = (): [registerState, registerHandler] => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const isMounted = React.useRef<boolean>();
    const [state, setState] = React.useState<registerState>({ registerName: "", registerEmail: "", registerPwd: "", registerRepeatPwd: "", registerSuccessMsg: "", registerErrorMsg: "" });

    // the success or error msg shown on each scenario displays for 5s and dissapear
    React.useEffect(() => {
        isMounted.current = true;

        setTimeout(() => {
            if (isMounted.current) setState((prevState) => ({ ...prevState, registerSuccessMsg: "", registerErrorMsg: "" }));
        }, 3000);

        return () => { isMounted.current = false; }
    }, [state.registerSuccessMsg, state.registerErrorMsg]);

    const handleRegisterNameChange: registerHandler['handleRegisterNameChange'] = (e) => setState((prevState) => ({ ...prevState, registerName: e.target.value }));
    const handleRegisterEmailChange: registerHandler['handleRegisterEmailChange'] = (e) => setState((prevState) => ({ ...prevState, registerEmail: e.target.value }));
    const handleRegisterPwdChange: registerHandler['handleRegisterPwdChange'] = (e) => setState((prevState) => ({ ...prevState, registerPwd: e.target.value }));
    const handleRegisterRepeatPwdChange: registerHandler['handleRegisterRepeatPwdChange'] = (e) => setState((prevState) => ({ ...prevState, registerRepeatPwd: e.target.value }));
    const handleRegisterSubmit: registerHandler['handleRegisterSubmit'] = (e) => {
        e.preventDefault();
        if (state.registerEmail.length === 0 || state.registerPwd.length === 0) setState((prevState) => ({ ...prevState, registerSuccessMsg: "", registerErrorMsg: "Please fill all required fields" }));
        else if (state.registerPwd !== state.registerRepeatPwd) setState((prevState) => ({ ...prevState, registerSuccessMsg: "", registerErrorMsg: "Passwords do not match" }));
        // call the api and set the state
        else apis.register(state.registerEmail, state.registerPwd, state.registerName)
        .then((data) => {
            setState((prevState) => ({ ...prevState, registerErrorMsg: "", registerSuccessMsg: data.data.message }));
            dispatch(userActions.login(data.data.data.token));
            setTimeout(() => {
                history.replace('/');
            }, 3000);
        })
        .catch((e) => setState((prevState) => ({ ...prevState, registerSuccessMsg: "", registerErrorMsg: e.data.message })));
    }

    return [state, { handleRegisterNameChange, handleRegisterEmailChange, handleRegisterPwdChange, handleRegisterRepeatPwdChange, handleRegisterSubmit }];
}


export const useLogin = (): [loginState, loginHandler] => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const isMounted = React.useRef<boolean>();
    const [state, setState] = React.useState<loginState>({ loginEmail: "", loginPwd: "", loginSuccessMsg: "", loginErrorMsg: "" });

    // the success or error msg shown on each scenario displays for 5s and dissapear
    React.useEffect(() => {
        isMounted.current = true;

        setTimeout(() => {
            if (isMounted.current) setState((prevState) => ({ ...prevState, loginSuccessMsg: "", loginErrorMsg: "" }));
        }, 3000);

        return () => { isMounted.current = false; }
    }, [state.loginSuccessMsg, state.loginErrorMsg]);

    const handleLoginEmailChange: loginHandler['handleLoginEmailChange'] = (e) => setState((prevState) => ({ ...prevState, loginEmail: e.target.value }));
    const handleLoginPwdChange: loginHandler['handleLoginPwdChange'] = (e) => setState((prevState) => ({ ...prevState, loginPwd: e.target.value }));
    const handleLoginSubmit: loginHandler['handleLoginSubmit'] = (e) => {
        e.preventDefault();
        if (state.loginEmail.length === 0 || state.loginPwd.length === 0) setState((prevState) => ({ ...prevState, loginSuccessMsg: "", loginErrorMsg: "Please fill all required fields" }));
        // call the api and set the state
        else apis.login(state.loginEmail, state.loginPwd)
        .then((data) => {
            setState((prevState) => ({ ...prevState, loginErrorMsg: "", loginSuccessMsg: data.data.message }));
            dispatch(userActions.login(data.data.data.token));
            setTimeout(() => {
                history.replace('/');
            }, 3000);
        })
        .catch((e) => setState((prevState) => ({ ...prevState, loginSuccessMsg: "", loginErrorMsg: e.data.message })));

    }

    return [state, { handleLoginEmailChange, handleLoginPwdChange, handleLoginSubmit }];
}