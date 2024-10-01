import './Common.css';
import { useState, useEffect } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const HomePage = () => {
    const [subject, setSubject] = useState("");
    const [hour, setHour] = useState(0);
    const [studyList, setStudyList] = useState([]);

    useEffect(() => {
        const localStudyList = JSON.parse(localStorage.getItem("studyListData"));
        if(localStudyList){
            setStudyList(localStudyList);
        }
    })

    const addStudyList = () => {
        if(hour <= 0 || subject.length === 0){
            alert("Please enter a valid Subject subject and hour!!!");
            return; 
        };
        let copyStudyList = [...studyList, {subject, hour}];
        localStorage.setItem("studyListData", JSON.stringify(copyStudyList));
        setStudyList(copyStudyList);
        setHour(0); 
        setSubject("");
    };

    const changeHours = (n, idx) => {
        let copyStudyList = [...studyList];
        copyStudyList.splice(idx, 1, {subject:studyList[idx].subject , hour: Number(studyList[idx].hour) + n});
        localStorage.setItem("studyListData", JSON.stringify(copyStudyList));
        setStudyList(copyStudyList);
    }

    const removeStudyPlan = (idx) => {
        let copyStudyList = [...studyList];
        copyStudyList.splice(idx, 1);  // Remove the item at the index
        localStorage.setItem("studyListData", JSON.stringify(copyStudyList));
        setStudyList(copyStudyList);
    }
    
    return (
        <div className="home-page">
            <h1>Welcome to our website!</h1>
            <p>Geekster Education Planner!</p>
            <div className="input-box">
                <input 
                    type="text" 
                    subject="subject" 
                    value={subject}  // Bind the input field value to state
                    onChange={(e) => setSubject(e.target.value)} 
                    placeholder="What did you learn?"
                />
                <input 
                    type="number" 
                    subject="hour" 
                    value={hour}  // Bind the input field value to state
                    onChange={(e)=> setHour(Number(e.target.value))} 
                    placeholder="How many hours?"
                />
                <button onClick={addStudyList}>Submit</button>
            </div>
            <div className='list-container'>
                {studyList.map((item, index) => (
                    <div className='list-card' key={index + 1}>
                        <div className="user-subject-hour">
                            <p>Subject: {item.subject}</p>
                            <p>Hours: {item.hour}</p>
                        </div>
                        <div className="button-container">
                            <IoIosAddCircleOutline className='icons' onClick={()=>{
                                changeHours(1, index);
                            }} />
                            <CiCircleMinus className='icons' onClick={()=>{
                                changeHours(-1, index);
                            }}/>
                            <MdOutlineDeleteForever className='icons red' onClick={()=>{
                                removeStudyPlan(index);
                            }}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
