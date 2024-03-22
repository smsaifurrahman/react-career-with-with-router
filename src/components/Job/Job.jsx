
import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {logo,job_title, company_name, remote_or_onsite, location, job_type, id, salary} = job;
    return (
    <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src= {logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-4 py-2 font-extrabold border rounded border-[#7E90fe] mr-4 text-[#7390fe]"> {remote_or_onsite} </button>
                    <button className="px-4 py-2 font-extrabold border rounded border-[#7E90fe] mr-4 text-[#7390fe]"> {job_type} </button>
                </div>
                <div className="flex justify-between mt-4 ">
                    <h2 className=" flex items-center gap-3"><FaLocationDot className="text-2xl"></FaLocationDot> {location} </h2>
                    <h2 className=" mt-4 flex items-center gap-3"><CiDollar  className="text-2xl"></CiDollar > {salary} </h2>
                    
                </div>
                <div className="card-actions ">
                <Link to={`/job/${id}`} ><button className="btn btn-primary"> View Details </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;