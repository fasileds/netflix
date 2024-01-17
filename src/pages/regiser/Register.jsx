import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="top">
                <div className="wraper">
                <img className="logo" src="https://th.bing.com/th/id/OIP.Ko2MIOzzDlWu8a_1Xo8UAQHaEK?rs=1&pid=ImgDetMain" alt="" />
                <button className="loginButton">SignIn</button>
                </div>
            </div>
            <div className="container">
                <h1>unlimitied movise are here whay don't use it</h1>
                <h2>watch anywhere .cancel anytime.</h2>
                <p>
                    ready to watch ? enter your email to create or restart your membershipe
                </p>
                <div className="input">
                    <input type="email" placeholder="emaile Adress" />
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}
