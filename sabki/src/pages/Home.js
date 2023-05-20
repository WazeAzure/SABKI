import React from "react";
import Layout from "../components/Layout";
import "./Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    const handleSurvey = () => {
        navigate("/survey");
    }

    const handlePanduan = () => {
        navigate("/panduan");
    }

    return (
        <Layout>
            <div className="row" style={{marginTop: "2rem"}}>
                <div className="col-sm" >
                    <h1 style={{textAlign: "left", letterSpacing: "3px"}}><span style={{color: "rgb(255, 114, 114)", fontWeight: "bold"}}>Selamat Datang di</span><br />Survei Anak Berkebutuhan Khusus Indonesia</h1>
                    <p style={{textAlign: "left", letterSpacing: "2px", margin: "1.5rem 0"}}>Sebuah tempat untuk memberikan survey</p>
                    <button style={{textAlign: "left"}} id="btn-survey" onClick={handleSurvey}>Ambil Survey <BsFillArrowRightCircleFill className="ic-survey"/></button>
                    <button style={{textAlign: "left"}} id="btn-panduan" onClick={handlePanduan}>Panduan </button>
                </div>
                <div className="col-md">
                    <img src="people.svg" style={{width: "100%"}} alt="people"/>
                </div>
            </div>
        </Layout>
    )
};

export default Home;