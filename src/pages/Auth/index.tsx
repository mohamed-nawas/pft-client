import { useLogin, useRegister } from "./handler"
import AuthUI from './ui';


export default () => {
    const [registerState, registerHandler] = useRegister();
    const [loginState, loginHandler] = useLogin();

    return <AuthUI {...registerState} {...loginState} {...registerHandler} {...loginHandler} />
}