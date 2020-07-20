import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../src/Logo.svg';
import { Modal} from "react-bootstrap";
// import { Card } from "react-bootstrap";
import "./UserDashboard.css";
import { toast } from "react-toastify";
import decode from 'jwt-decode';
import LatestReports from './LatestReports';
import '../App.css';



// const SearchedReport =({ })=>{

// }
// const SearchedReport = props => {
//   const { category, details, imageurl } = props;
//   return (
//     <>
//       <div>
//          <p>{category} </p>
//          <p>{details} </p>
//         <img src={imageurl} alt="reports" style={{ width: "500px", height: "50px" }} />
//       </div>
//       {/* <p>{name}</p> */}
//     </>
//   );
// };

const Cards = ({ info, index, deleteReport }) =>
    <div className="todo">
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
                <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>
                <p className="card-text"> {info.details} </p>
                <img className="card-img-top" src={info.imageurl} alt="" style={{ width: "200px", height: "150px" }} />
                <div className="edit-delete">
                    <button ><i className="fa fa-pencil-square-o fa-2x"></i></button>
                    <button onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-2x"></i></button>
                </div>

            </div>
        </div>
    </div>;


const User = ({ info, index }) =>
    <div className="welcome-title">
        <h2> WELCOME {info.first_name} {info.last_name}</h2>
    </div>;

function ReportForm({ addReport }) {
    const [button, setButton] = useState(false);
    const [report, setReport] = useState({
        category: "",
        address: "",
        details: "",
        imageurl: "",
        localgovernment:"",
        privatereport:false,
        user_id:"",
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
        setReport({ ...report, imageurl: file.secure_url })
    }


   const handlePrivateReport = () =>{
       report.privatereport = !report.privatereport
       console.log(report.privatereport);
    setReport({ ...report, privatereport: report.privatereport })
   }



    const handleSubmit = async (e) => {
        e.preventDefault()
        const { user } = decode(localStorage.token)
        if (report.address.length === 0 && report.category.length === 0 && report.localgovernment.length === 0) {
            console.log("PLEASE FILL THE MESSAGE BOX")
            alert('Please fill the form properly')
        } else if (report.imageurl.length === 0) {
            alert("WAIT!! PICTURE IS LOADING INTO OUR DATABASE")
        } else {
            try {
                 const reportPosting = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        category: report.category,
                        address: report.address,
                        details: report.details,
                        imageUrl: report.imageurl,
                        localgovernment:report.localgovernment,
                        privatereport:report.privatereport,
                        user_id: user
                    })
                };
                fetch('http://localhost:3000/dashboard/home', reportPosting)
                    .then(response => response.json())
                    .then(data => setReport(data));

                console.log(user);
                console.log(report)
                addReport(report)
                setReport({
                    category: "",
                    address: "",
                    details: "",
                    imageurl: "",
                    localgovernment:"",
                    privatereport:false,
                    user_id:""
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
            <div className=""><button onClick={() => setButton(true)} className="modal-button"><i className=" space-icon fa fa-plus"></i>Add new report</button></div>
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
                            <input type="text" className="form-control" placeholder="Incident Address" required="required"  value={report.address} onChange={(e) => setReport({ ...report, address: e.target.value })} />
                        </div>
                        <label htmlFor="category">Select Local Government</label>
                        <select className="custom-select my-1 mr-sm-2" value={report.localgovernment} onChange={(e) => setReport({ ...report, localgovernment: e.target.value })}>
                            <option value="Agege">Agege</option>
                            <option value="ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
                            <option value="alimosho">Alimosho</option>
                            <option value="amuwo-Odofin">Amuwo-Odofin</option>
                            <option value="apapa">Apapa</option>
                            <option value="badagry">Badagry</option>
                            <option value="epe">Epe</option>
                            <option value="eti-Osa">Eti-Osa</option>
                            <option value="ibeju-Lekki">Ibeju-Lekki</option>
                            <option value="ifako-Ijaiye">Ifako-Ijaiye</option>
                            <option value="ikeja">Ikeja</option>
                            <option value="ikorodu">Ikorodu</option>
                            <option value="kosofe">Kosofe</option>
                            <option value="lagos island">Lagos Island</option>
                            <option value="lagos mainland">Lagos Mainland</option>
                            <option value="mushin">Mushin</option>
                            <option value="ojo">Ojo</option>
                            <option value="oshodi-isolo">Oshodi-Isolo</option>
                            <option value="somolu">Somolu</option>
                            <option value="surulere">Surulere</option>
                        </select>
                        <div className="form-group">
                            <label htmlFor="details">Incident Details</label>
                            <textarea className="form-control" value={report.details} rows="3" onChange={(e) => setReport({ ...report, details: e.target.value })}></textarea>
                            <label htmlFor="image">Add image</label>
                            <input type="file" className="form-control-file" name="file" onChange={uploadImage} />
                        </div>
                        <h5>Private report</h5>
                        <input type="checkbox" name="checkbox"  value={report.privatereport} onChange={handlePrivateReport} />
                        {/* <input type="checkbox" checked={report.privatereport} value={report.privatereport} onChange={(e) => setReport({ ...report, privatereport: e.target.value })} /> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleSubmit} >Save Report</button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )

}



function UserDashboard({ setAuth }) {


    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [ filteredReports,  setFilteredReports] = useState([]);
    const [reports, setReports] = useState([
        {
            category: "road accident",
            address: "Ilorin",
            details: "Fire burning",
            localgovernment:"surulere",
            imageUrl: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
            category: "fire accident",
            address: "Abuja",
            details: "Fire burning",
            localgovernment:"ikeja",
            imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
        }


    ])
    const [name, setName] = useState([
        { first_name: ""} ,
        {last_name: ""}
    ])

   
   
   
    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            // localStorage.removeItem("user");
            setAuth(false);
            toast.success("Logout successfully");
        } catch (err) {
            console.error(err.message);
        }
    };

   
    let history = useHistory();
   function landingPage() {
    history.push("/");
    };

    // useEffect(() => {   
    //     const { user } = decode(localStorage.token)
    //     console.log(user)

    //     fetch(`http://localhost:3000/dashboard/home/${user}`)
    //     // fetch(`http://localhost:3000/dashboard/home/`)
    //     .then(res => res.json())
    //     .then(result => { setReports(result)
          
    //       console.log(result)
    //     })
    //     .catch(err => {
    //       console.log(err.message);
  
    //     })


    // }, []);


   
   
    useEffect(() => {   

      
            console.log('This will run after 1 second!')
            const { user } = decode(localStorage.token)
            console.log(user)

            fetch(`http://localhost:3000/dashboard/home/${user}`)
            .then(res => res.json())
            .then(result => { setReports(result)
             setLoading(false);
              console.log(result)
            })
            .catch(err => {
              console.log(err.message);
      
            })
            



                
        fetch(`http://localhost:3000/userinfo/username/${user}`)
        .then(response => response.json())
        .then(username => { setName(username)
          
          console.log(username)
        })
        .catch(err => {
          console.log(err.message);
  
        })


     
     

        // const { user } = decode(localStorage.token)
        // console.log(user)
       
        // setLoading(true);
        // fetch(`http://localhost:3000/dashboard/home/${user}`)
        // .then(res => res.json())
        // .then(result => { setReports({
        //     category: result.category,
        //     address: result.address,
        //     details: result.details,
        //     localgovernment:result.localgovernment,
        //     imageUrl: result.imageurl
        // })
        //  setLoading(false);
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
  
        // })

        
        // fetch(`http://localhost:3000/userinfo/username/${user}`)
        // .then(response => response.json())
        // .then(username => { setName(username)
          
        //   console.log(username)
        // })
        // .catch(err => {
        //   console.log(err.message);
  
        // })






    }, []);

    useEffect(() => {
        // const filteredReports = (reports) => {
        //     const lowercasedValue = reports.toLowerCase().trim();
        //     if (lowercasedValue === "") setFilteredReports(null);
        //     else {
        //       const filteredReports = dataList.filter(item => {
        //         return Object.keys(item).some(key =>
        //           excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        //         );
        //       });
        //       setData(filteredData);
        //     }
        //   }





        setFilteredReports(
            reports.filter(report =>
              report.address.toLowerCase().includes(search.toLowerCase())
            ||  report.category.toLowerCase().includes(search.toLowerCase())
            ||  report.details.toLowerCase().includes(search.toLowerCase())
            ||  report.localgovernment.toLowerCase().includes(search.toLowerCase())
            )
          );
      }, [search, reports]);
    
    //   if (loading) {
    //     return <p>Loading reports...</p>;
    //   }




   

    


    const addReport = report => {
        const newReports = [...reports, report];
        setReports(newReports)
    }


    const deleteReport = index => {
        const newReports = [...reports];
        newReports.splice(index, 1);
        setReports(newReports);
    };



    return (
        <div className="user-dashboard">
            <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo" onClick={landingPage}/>
                <div style={{ display: "flex" }}>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search all reports"  onChange={e => setSearch(e.target.value)} />
                        {/* <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    
                    <i className="fa fa-user fa-3x" style={{ marginLeft: "10px" }}></i>
                    <button onClick={e => logout(e)} className="btn btn-danger">
                        Logout
                    </button>
                </div>
            </nav>
            {/* SideBar */}
            <div className="sidebar">
                  <ul className="sidebar-list">
                      <li>Home</li>
                      <li>settings</li>
                      <li>support</li>
                      <li>Log out</li>
                  </ul>
            </div>
            <div>  
                {name.map((info, index) => (
                    <User
                        key={index}
                        index={index}
                        info={info}
                    />
                ))}</div>



            <div className="todo-list">
                {/* {reports.map((info, index) => (
                    <Cards
                        key={index}
                        index={index}
                        info={info}
                        deleteReport={deleteReport}
                    />
                ))} */}



                     {/* {reports.map((info, index) => (
                    <Cards
                        key={index}
                        index={index}
                        info={info}
                        deleteReport={deleteReport}
                    />
                ))}  */}

                   {
                   filteredReports.map((info, index) => (
                    <Cards
                        key={index}
                        index={index}
                        {...info}
                        info={info}
                        deleteReport={deleteReport}
                    />
                  ))} 
                <ReportForm addReport={addReport} />
                 {/* 
                {filteredReports.map((report, idx) => (
                <SearchedReport key={idx} {...report} />
              ))} */}
            </div>

          <LatestReports />
          {/* <Home /> */}
        </div>
    );
}
export default UserDashboard;



