import React from "react"
import LoginForm from "./components/LoginForm"
import "./Login.css"
interface IProps{

}
const Login : React.FC<IProps> = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8 front-img-container">
                    <img src='https://dangminhquan.blob.core.windows.net/bakeryshop/Cart_FrontImg.jpeg' />
                </div>
                <div className="col-sm-4">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
export default Login