import React,{useState} from 'react'
import { Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";






function Cards({addReport}) {
    const [button, setButton] = useState(false);
   
    // const [reportCategory, setReportCategory] = useState("");
    // const [incidentAddress, setincidentAddress] = useState("");
    // const [incidentDetails, setincidentDetails] = useState("");
    // const body = [reportCategory, incidentAddress, incidentDetails]
       const [report, setReport]=useState([{
           category:"",
           address:"",
           details:""
       }])


      

      
    const handleSubmit=(e)=>{
        e.preventDefault()
       if ( report.address.length === 0 && report.category.length === 0){
           console.log("PLEASE FILL THE MESSAGE BOX")
       }else{
        try{
            // const body = {reportCategory, incidentAddress, incidentDetails}
            // console.log(body)
            // setReportCategory("")
            // setincidentAddress("")
            // setincidentDetails("")
            console.log(report)
            // addReport(report)
            setReport({ 
            category:"",
            address:"",
            details:""})
            setButton(false)
        } catch(error){
            console.log(console.error()
            )
        }

       }
       
    }



    

        return(
            <div>
            <div><button onClick={() => setButton(true)} className="modal-button"><i className=" space-icon fa fa-plus"></i>Add new report</button></div>
            <form className=" form-font form-inline" action="">
                <Modal show={button} onHide={() => setButton(false)}>
                    <Modal.Header closeButton >New Report</Modal.Header>
                    <Modal.Body>
                    <label htmlFor="exampleFormControlFile1">Choose a report category</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" value={report.category} onChange={(e) =>setReport({...report, category:e.target.value})}>
                        {/* <select autoFocus  className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={(e) =>setReportCategory(e.target.value)}> */}
                            {/* <option defaultValue="choose" disabled="true">Choose a report category...</option> */}
                            <option value="fire accident">Fire Accident</option>
                            <option value="road accident">Road Accident</option>
                            <option value="armed robbery">Armed Robbery</option>
                            <option value="health emergency">Health Emergency</option>
                            <option value="others">others</option>
                        </select>
                        <div style={{ marginBottom: "5px" }}>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Incident Address" value={report.address} onChange={(e) =>setReport({...report, address:e.target.value})}/>
                            {/* <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Incident Address" onChange={(e) =>setincidentAddress(e.target.value)} /> */}
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">details</label>
                            <textarea className="form-control"  value={report.details} rows="3" onChange={(e) =>setReport({...report, details:e.target.value})}></textarea>
                            <label htmlFor="exampleFormControlFile1">Add image</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"  />
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                    <button  className="btn btn-primary" onClick={ handleSubmit } >save</button>
                    </Modal.Footer>
                </Modal>
            </form>
         </div>
        )
    
}


export default Cards;