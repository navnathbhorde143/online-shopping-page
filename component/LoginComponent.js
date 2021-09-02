import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export default function LoginComponent(){
    const title='user Login';
    return(
        <div style={{marginLeft:500,marginTop:100}}>
            <h3>{title}</h3>
            <dl className="w-25">
                <dt>User name</dt>
                <dd><input type="text" class="form-control"></input></dd>
                <dt className="form-label">password</dt>
                <dd><input type="password" className="form-control"></input></dd>
            </dl>
            <button className="btn btn-primary">Login</button>
        </div>
    )

}