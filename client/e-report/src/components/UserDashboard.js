import React, { useState, useEffect } from 'react';
import logo from '../../src/Logo.svg';
import { Modal } from "react-bootstrap";
import "./UserDashboard.css";
import { toast } from "react-toastify";



const Cards = ({ info, index, deleteReport }) =>
    <div className="todo">
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
                <p className="card-text"> {info.details} </p>
                <img className="card-img-top" src={info.imageUrl} alt="" style={{ width: "200px", height: "150px" }} />
                <div className="edit-delete">
                    <button ><i className="fa fa-pencil-square-o fa-2x"></i></button>
                    <button onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-2x"></i></button>
                </div>

            </div>
        </div>
    </div>;

function ReportForm({ addReport }) {
    const [button, setButton] = useState(false);
    const [report, setReport] = useState({
        category: "",
        address: "",
        details: "",
        imageUrl: ""
    })


    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'reports')

        const res = await fetch("https://api.cloudinary.com/v1_1/depcgv5nm/image/upload",
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        console.log(file.secure_url)
        setReport({ ...report, imageUrl: file.secure_url })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (report.address.length === 0 && report.category.length === 0) {
            console.log("PLEASE FILL THE MESSAGE BOX")
        } else if (report.imageUrl.length === 0) {
            alert("WAIT!! PICTURE IS LOADING INTO OUR DATABASE")
        } else {
            try {
               



                console.log(report)
                addReport(report)
                setReport({
                    category: "",
                    address: "",
                    details: "",
                    imageUrl: ""
                })
                setButton(false)
            } catch (error) {
                console.log(console.error()
                )
            }



        }

    }




    return (
        <div>
            <div><button onClick={() => setButton(true)} className="modal-button"><i className=" space-icon fa fa-plus"></i>Add new report</button></div>
            <form className=" form-font form-inline" action="">
                <Modal show={button} onHide={() => setButton(false)}>
                    <Modal.Header closeButton >New Report</Modal.Header>
                    <Modal.Body>
                        <label htmlFor="category">Choose a report category</label>
                        <select className="custom-select my-1 mr-sm-2" value={report.category} onChange={(e) => setReport({ ...report, category: e.target.value })}>
                            <option value="fire accident">Fire Accident</option>
                            <option value="road accident">Road Accident</option>
                            <option value="armed robbery">Armed Robbery</option>
                            <option value="health emergency">Health Emergency</option>
                            <option value="flood">Flood</option>
                            <option value="others">others</option>
                        </select>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="text" className="form-control" placeholder="Incident Address" value={report.address} onChange={(e) => setReport({ ...report, address: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">details</label>
                            <textarea className="form-control" value={report.details} rows="3" onChange={(e) => setReport({ ...report, details: e.target.value })}></textarea>
                            <label htmlFor="image">Add image</label>
                            <input type="file" className="form-control-file" name="file" onChange={uploadImage} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleSubmit} >save</button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )

}



function UserDashboard({ setAuth }) {



    const [name, setName] = useState("");

    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:3000/dashboard/home", {
                method: "POST",
                headers: { jwt_token: localStorage.token }
            });

            const parseData = await res.json();
            setName(parseData.lastname);
            setReports(parseData);
            console.log(parseData)
        } catch (err) {
            console.error(err.message);
        }
    };

    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logout successfully");
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProfile();
        // getDbReport();


    }, []);




    const [dbReports, setDbReports] = useState([])



    const [reports, setReports] = useState([
        {
            category: "road accident",
            address: "Ilorin",
            details: "Fire burning",
            imageUrl: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
            category: "fire accident",
            address: "Abuja",
            details: "Fire burning",
            imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
        }


    ])



    // useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // const { user_id } = req.body
        // fetch(`http://localhost:3000/home/${user_id}`)
        //     .then(response => response.json())
        //     .then(data => console.log(data));



        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    // const getDbReport = async () => {
    //     try {
    //         const reports = await fetch('http://localhost:3000/home', {
    //             method: 'GET',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({
    //              details: reports.details,
    //              address:reports.address,
    //              category:reports.category,
    //              imageUrl:reports.imageUrl
    //             })
    //           })
    //         // ("http://localhost:3000/home")
    //         const jsonData = await reports.json()
    //         setDbReports(jsonData)          
    //     } catch (error) {
    //         console.log(error)
    //     } 
    // }


    const addReport = report => {
        const newReports = [...reports, report];
        setReports(newReports)
    }


    const deleteReport = index => {
        const newReports = [...reports];
        newReports.splice(index, 1);
        setReports(newReports);
    };


    //   useEffect(() => {
    //     getDbReport()
    // }, [])


    return (
        <div className="user-dashboard">
            <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo" />
                <div style={{ display: "flex" }}>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    
                    <i className="fa fa-user fa-3x" style={{ marginLeft: "10px" }}></i>
                    <button onClick={e => logout(e)} className="btn btn-primary">
                        Logout
                    </button>
                </div>
            </nav>
            <h6>Welcome {name}</h6>



            <div className="todo-list">
                {reports.map((info, index) => (
                    <Cards
                        key={index}
                        index={index}
                        info={info}
                        deleteReport={deleteReport}
                    />
                ))}
                <ReportForm addReport={addReport} />
            </div>


        </div>
    );


}
export default UserDashboard;



