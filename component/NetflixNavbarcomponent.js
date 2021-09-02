
export default function Netflixnavbarcomponent(){
    return(
        <div>
            <div className="btn-toolbar justify-content-between mt-3" style={{height:'200px'}}>
                <div className="btn-group">
                    <h1 className="text-danger">NETFLIX</h1>
                </div>
                <div className="btn-group">
                    <div className="d-flex">
                        <div>
                            <select className="form-select me-3">
                                <option>English</option>
                                <option>Marathi</option>
                            </select>
                        </div>
                        <div className="ms-3">
                            <button className="btn btn-danger">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}