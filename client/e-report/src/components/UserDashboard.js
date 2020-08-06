import React, { useState, useEffect } from 'react';
import { useHistory, Switch, Route, Link } from "react-router-dom";
import logo from '../../src/Logo.svg';
import { Modal, Button, card } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import "./UserDashboard.css";
import { toast } from "react-toastify";
import decode from 'jwt-decode';
import { FaHome} from "react-icons/fa";
import {GrSupport} from "react-icons/gr";
import {MdSettings} from "react-icons/md";
import { IoMdLogOut } from 'react-icons/io';
import Support from './Support';
import Settings from './Settings'
import LatestReport from './LatestReport';
import '../App.css';


const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="accordion-wrapper">

        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </div>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>

  );
};


const Cards = ({ info, index, deleteReport }) => (
  <div className="todo">
    <div className="wrapper" style={{ borderRadius: "10px", marginTop: "20px" }}>

      <div className="card-body">
        <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
        <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>
        <button className="editbutton" style={{ fontSize: "14px", position: "relative",  bottom: "60px", left: "750px"}}>Edit</button>
        <button className="delbutton" style={{ fontSize: "14px", position: "relative",  bottom: "60px", left: "790px"}} onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-1.5x"></i></button>
        <div>
          <Accordion title="View details">
            <div className="myview" style={{backgroundColor: "white", padding: "10px", borderTop: "4px solid rgba(0, 0, 0, 0.25)"}}>
              {/* <h5>{info.category}</h5>
              <h5>{info.localgovernment}</h5> */}
              <div>
              <p>{info.details}</p>
              </div>
              <div>
              <img className="card-img" src={info.imageurl} alt="" style={{ width: "300px", height: "200px" }} />
              </div>             
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
)


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
        localgovernment: "",
        privatereport: false,
        user_id: "",
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


    const handlePrivateReport = () => {
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
                        localgovernment: report.localgovernment,
                        privatereport: report.privatereport,
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
                    localgovernment: "",
                    privatereport: false,
                    user_id: ""
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
        {/*modal-button */} {/*I remove the modal-button class from the button */}
        <div className="">
          <button style ={{backgroundColor:" #27496D", color: "white", fontSize: "18px", borderRadius: "5px", width:"200px"}} onClick={() => setButton(true)} className="modal-button">
            <i className=" space-icon fa fa-plus"></i>Create new report
          </button>
        </div>
        <form className=" form-font form-inline" action="">
          <Modal show={button} onHide={() => setButton(false)}>
            <Modal.Header closeButton>New Report</Modal.Header>
            <Modal.Body>
              <label htmlFor="category">Choose a report category</label>
              <select
                className="custom-select my-1 mr-sm-2"
                value={report.category}
                onChange={(e) =>
                  setReport({ ...report, category: e.target.value })
                }
              >
                <option value="fire accident">Fire Accident</option>
                <option value="road accident">Road Accident</option>
                <option value="armed robbery">Armed Robbery</option>
                <option value="health emergency">Health Emergency</option>
                <option value="flood">Flood</option>
                <option value="others">others</option>
              </select>

              <div style={{ marginBottom: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Incident Address"
                  required="required"
                  value={report.address}
                  onChange={(e) =>
                    setReport({ ...report, address: e.target.value })
                  }
                />
              </div>
              <label htmlFor="category">Select Local Government</label>
              <select
                className="custom-select my-1 mr-sm-2"
                value={report.localgovernment}
                onChange={(e) =>
                  setReport({ ...report, localgovernment: e.target.value })
                }
              >
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
                <textarea
                  className="form-control"
                  value={report.details}
                  rows="3"
                  onChange={(e) =>
                    setReport({ ...report, details: e.target.value })
                  }
                ></textarea>
                <label htmlFor="image">Add image</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="file"
                  onChange={uploadImage}
                />
              </div>
              <h5>Private report</h5>
              <input
                type="checkbox"
                name="checkbox"
                value={report.privatereport}
                onChange={handlePrivateReport}
              />
              {/* <input type="checkbox" checked={report.privatereport} value={report.privatereport} onChange={(e) => setReport({ ...report, privatereport: e.target.value })} /> */}
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save Report
              </button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    );

}



function UserDashboard({ setAuth }) {


    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredReports, setFilteredReports] = useState([]);
    const [reports, setReports] = useState([
        {
            category: "road accident",
            address: "Ilorin",
            details: "Fire burning",
            localgovernment: "surulere",
            imageUrl: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
            category: "fire accident",
            address: "Abuja",
            details: "Fire burning",
            localgovernment: "ikeja",
            imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
        }


    ])
    const [name, setName] = useState([
        { first_name: "" },
        { last_name: "" }
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
            .then(result => {
                setReports(result)
                setLoading(false);
                console.log(result)
            })
            .catch(err => {
                console.log(err.message);

            })





        fetch(`http://localhost:3000/userinfo/username/${user}`)
            .then(response => response.json())
            .then(username => {
                setName(username)

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
                || report.category.toLowerCase().includes(search.toLowerCase())
                || report.details.toLowerCase().includes(search.toLowerCase())
                || report.localgovernment.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, reports]);

    
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
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#27496D", position: "fixed"}}
        >
          <img src={logo} alt="Logo" onClick={landingPage} />
          <div style={{ display: "flex" }}>
            <i className="fa fa-user fa-3x" style={{ marginLeft: "10px" }}></i>
            <button onClick={(e) => logout(e)} className="btn btn-danger">
              Logout
            </button>
          </div>
        </nav>
        {/* SideBar */}
        <div className="dashboard-container">
          <div className="dashboard-handler">
            <div className="sidebar">
              <ul className="sidebar-list">
                <div className="home-container">
                  <Link to="/userdashboard"> <button className="home-text">
                    <FaHome className="home-icon" />
                    <span className="home-te">Home</span></button>
                  </Link>
                </div>

                <div className="support-container">
                  <Link to="/support">
                    <button className="support-text">
                      <MdSettings className="support-icon" />
                      <span className="support-te"> support</span>
                    </button>
                  </Link>
                </div>

                <div className="setting-container">
                  <Link to="/settings">
                    <button className="setting-text">
                      <GrSupport className="setting-icon" />
                      <span class="setting-te">settings</span>
                    </button>
                  </Link>
                </div>

                <div className="logout-container">
                  <button className="logout-text">
                    <IoMdLogOut className="logout-icon" />
                    <span className="logout-te"> Log out</span>
                  </button>
                </div>
              </ul>
            </div>

            <div className="dashboard-content">
              {/*<div>
                { name.map((info, index) => (
                    <User
                        key={index}
                        index={index}
                        info={info}
                    />
                ))}</div> */}
              <div className="part-1">
                <div className="report-form">
                  <div className="welcome-user">
                    <h1 className="welcome-user-text">Welcome Ditimi!</h1>
                  </div>
                  <div className="report-space">
                    <ReportForm addReport={addReport} />
                  </div>
                </div>

                <div className="this">
                  <div className="search-date">
                    <div className="date">
                      <h6 className="date-text">Thursday 21 May 2020</h6>
                    </div>

                    <div className="search-form">
                      <form className="form-inline my-2 my-lg-0">
                        <input
                          className="form-control mr-sm-2"
                          style={{backgroundColor: "#f8f5f5"}}
                          type="search"
                          placeholder="Search all reports"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <button style={{backgroundColor: "#27496D", color: "white", marginLeft: "-10px"}} className="btn btn-outline-dark my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="part-2">
                <div className="history-container">
                  <button className="history-text">History</button>
                </div>

                <div className="nearby-reports">
                  <Link to="/latestreport" className="nearby-reports-text">Latest nearby reports</Link>
                </div>
              </div>

              <div className="part-3">
                <div className="all-report">
                  <button className="all-report-text">All</button>
                </div>

                <div className="forwarded-cases">
                  <button className="forwarded-text">Forwarded</button>
                </div>

                <div className="pending">
                  <button className="pending-text">Pending</button>
                </div>
              </div>

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
                {filteredReports.map((info, index) => (
                  <Cards
                    key={index}
                    index={index}
                    {...info}
                    info={info}
                    deleteReport={deleteReport}
                  />
                ))}
              </div>

              {/* 
                {filteredReports.map((report, idx) => (
                <SearchedReport key={idx} {...report} />
              ))} */}

              {/*<LatestReports />*/}
              {/* <Home /> */}
            </div>
          </div>
        </div>
        {/*
        <Switch>
          <Route path="/support" component={Support} />
         </Switch>
        */}
      </div>
    );
}
export default UserDashboard;



