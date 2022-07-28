import React, { useState } from 'react';

import Styles from "./Style.module.css";

import Row from '../../Component/Row';

export const Home = () => {

    // Datas of  the User

    const [ Users, setUsers ] = useState([
        {
            id: 0,
            Name: "Charvie Sharma",
            Email: "charviesharma@gmail.com",
            Img: "image.png",
            WalkedSteps: 2547,
            TargetSteps: 4,
            CurrentDate: "15 Oct",
            ScheduleDate: "22 Oct",
            isDeadlineClose: true,
            isDeadlineOver: true,
            Protien: 45,
            Fats: 30,
            Carbs: 50,
            BurntCalorie: 2547,
            TargetCalorie: 2.5,
        },
        {
            id: 1,
            Name: "Charvie Sharma",
            Email: "charviesharma@gmail.com",
            Img: "image.png",
            WalkedSteps: 2547,
            TargetSteps: 4,
            CurrentDate: "15 Oct",
            ScheduleDate: "22 Oct",
            Protien: 45,
            Fats: 30,
            Carbs: 50,
            BurntCalorie: 2547,
            TargetCalorie: 2.5,
        },
        {
            id: 2,
            Name: "Charvie Sharma",
            Email: "charviesharma@gmail.com",
            Img: "image.png",
            WalkedSteps: 2547,
            TargetSteps: 4,
            CurrentDate: "15 Oct",
            ScheduleDate: "22 Oct",
            isDeadlineClose: true,
            Protien: 70,
            Fats: 30,
            Carbs: 50,
            BurntCalorie: 2547,
            TargetCalorie: 2.5,
        },
    ]);

    // Function to update the target steps

    const updateSteps = (props) => {
        let User = Users.slice();
        
        if(props.action === "+") {
            User[props.id].TargetSteps = User[props.id].TargetSteps + 0.5;
        } else if ((props.action === "-") && (User[props.id].TargetSteps >= 0.5)) {
            User[props.id].TargetSteps = User[props.id].TargetSteps - 0.5;
        }
        
        setUsers(User);
    };

    //Function to update the target calorie

    const updateCalorie = (props) => {
        let Useres = Users.slice();

        if(props.action === "+") {
            Useres[props.id].TargetCalorie = Math.round((Useres[props.id].TargetCalorie + 0.1)*10)/10;
        } else if ((props.action === "-") && (Useres[props.id].TargetCalorie >= 0.1)) {
            Useres[props.id].TargetCalorie = Math.round((Useres[props.id].TargetCalorie - 0.1)*10)/10;
        }

        setUsers(Useres);
    }
    
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                
                <div className={Styles.heading}>
                    <div className={Styles.gap}></div>
                    <div className={Styles.head}>
                        <i id={Styles.icons} class="fa-solid fa-person-walking fa-lg"></i>
                        Steps
                    </div>
                    <div className={Styles.head}>
                        <i id={Styles.icon} class="fa-solid fa-dumbbell"></i>
                        Workout
                    </div>
                    <div className={Styles.head}>
                        <i id={Styles.icons} class="fa-solid fa-bowl-rice fa-lg"></i>
                        Nutrition
                    </div>
               
                </div>

                {/* Mapping the datas of the User to a Row Component */}
                
                {Users.map((user) => (
                    <Row
                        User = {user}
                        updateSteps = {updateSteps}
                        updateCalorie = {updateCalorie}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;