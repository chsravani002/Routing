export default function Signup(){
    return(
        <>
      <div className="container-fluid  my-3  d-flex justify-content-center">
            <div className="row border border-primary p-5 ">
                <div className="col">
                    <h2 className="text-center mb-4">Signup</h2>
                    <label>Email:</label>
                    <input type="email" className="form-control my-4"></input>
                    <label>Password:</label>
                    <input type="text" className="form-control my-4"></input>
                    <div className="d-flex justify-content-center">
                    <input class="btn btn-primary " type="submit" value="Signup"></input>
                    </div>
                    
                </div>
            </div>

        </div>
        </>
    )
}