import React from 'react'; 
import resume from "../../assets/pdf/Yongfeng_CV.docx";


function Resume(){
    return(<div>
        <a href="#" target="_blank" >Link to my resume </a>
        <hr/>
        <ul>
            Skills Achieved: 
        <h3 className="list-header">Front-end skills</h3>   
            <ul className="prof-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>

        <h3 className="list-header">Back-end skills</h3>
        <ul className="prof-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
        </ul>
        </ul>
    </div>)
}

export default Resume;