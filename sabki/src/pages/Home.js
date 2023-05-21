import React from "react";
import Layout from "../components/Layout";
import "./Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useOutletContext } from "react-router-dom";
import PetaIndo from "../components/Map";

function Home(){
    const [open, setOpen] = useOutletContext();

    const navigate = useNavigate();

    const handleSurvey = () => {
        setOpen(true)
        navigate("/survey");
    }

    const handlePanduan = () => {
        navigate("/panduan");
    }

    return (
        <Layout>
            <div className="row" style={{marginTop: "2rem", minHeight: "81vh"}}>
                <div className="col-sm" >
                    <h1 style={{textAlign: "left", letterSpacing: "3px"}}><span style={{color: "rgb(255, 114, 114)", fontWeight: "bold"}}>Selamat Datang di</span><br />Survei Anak Berkebutuhan Khusus Indonesia</h1>
                    <p style={{textAlign: "left", letterSpacing: "2px", margin: "1.5rem 0"}}>Dengan mengisi survei ini, Anda berkontribusi dalam mendukung peningkatan pelayanan kesehatan dan penyusunan kebijakan Anak Berkebutuhan Khusus di Indonesia.</p>
                    <button style={{textAlign: "left"}} id="btn-survey" onClick={handleSurvey}>Isi Survei<BsFillArrowRightCircleFill className="ic-survey"/></button>
                    <button style={{textAlign: "left"}} id="btn-panduan" onClick={handlePanduan}>Panduan</button>
                </div>
                <div className="col-sm">
                    <img src={require("../image/people.svg").default} style={{width: "100%"}} alt="people"/>
                </div>
            </div>
        </Layout>
    )
};

export default Home;