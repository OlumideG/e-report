import React, { useState } from 'react';
import '../App.css';



const Cards = ({ info, index }) =>
    <div className="todo">
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
                <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>
                <p className="card-text"> {info.details} </p>
                <img className="card-img-top" src={info.imageurl} alt="" style={{ width: "200px", height: "150px" }} />
                <div className="edit-delete">
            </div>

            </div>
        </div>
    </div>;


const LatestReports =()=>{
const [search, setSearch] = useState("");
const[numberOfReports, setNumberOfReports] = useState(Number)
const[latestReport, setLatestReport] = useState([
                   {
    category: "",
     address: "",
     details: "",
           imageurl: "",
   localgovernment:"", 
 }    
])



// useEffect(() => {
//     handleSubmit()
//       );
//   }, [search, reports]);

//   if (loading) {
//     return <p>Loading countries...</p>;
//   }
  

const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(search)

    await fetch(`http://localhost:3000/dashboard/home/latest/${search}`)
    .then(response => response.json())
    .then(result => { setLatestReport(result)
        // setLoading(false);
        //  console.log(result)
        setNumberOfReports(result.length)
       })
      console.log(latestReport)
    //   setNumberOfReports(latestReport.length +1)

}

return(
    <div className="latestContainer"> 
        <h2>Latest Reports</h2>
        <label htmlFor="category">Select Local Government</label>
                        <select className="custom-select my-1 mr-sm-2" value={search} onChange={(e) => setSearch( e.target.value )}>
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
                        <button onClick={handleSubmit}>Search</button>


                        <div>
                          <div>Number of latest reports found is {numberOfReports} in {search}</div>
                        {

                        latestReport.map((info, index) => (
                      <Cards
                        key={index}
                        index={index}
                        info={info}
                        
                    />
                ))}
                        </div>
    </div>
)


}


export default LatestReports