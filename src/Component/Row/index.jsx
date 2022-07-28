import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Style.module.css';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';

export const Row = (props) => {
    
    const linkStyle = {
        textDecoration: "none",
        color: '#FFFFFF',
        height: "80%",
        width: "100%",
    };

    return (
        <div className={Styles.container}>
            
            {/* Basic details of the person */}

            <div className={Styles.person}>

                <div className={Styles.image}>
                    <img src={`/Assests/${props.User.Img}`} alt="profile" />
                </div>

                <div className={Styles.info}>
                    <div className={Styles.name}>
                        <span id={Styles.bottom}>{props.User.Name}</span>
                    </div>

                    <div className={Styles.email}>
                        <span id={Styles.top}>{props.User.Email}</span>
                    </div>
                </div>

            </div>

            {/* End of Basic of the person */}

            <div className={Styles.contents}>
                
                {/* Details of Steps */}
                
                <div className={Styles.content1}>

                    <div className={Styles.CircularBar} style={{width: "60px", height: "60px"}}>
                        <CircularProgressbarWithChildren
                            value={props.User.WalkedSteps}
                            maxValue={props.User.TargetSteps * 1000}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                pathtransitionDuration: 0.5,
                                pathColor: '#7FD18C',
                            })}
                        >
                            <div id={Styles.line1}>
                                {props.User.WalkedSteps}
                            </div>
                            <div id={Styles.line2}>
                                Walked
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div className={Styles.targetsteps}>
                        
                        <div id={Styles.plus} onClick = {() => {props.updateSteps({id: props.User.id, action: "+"})}}>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        
                        <div id={Styles.line3}>
                            {props.User.TargetSteps}K
                        </div>
                        <div id={Styles.line4}>
                            target
                        </div>
                        
                        <div id={Styles.minus} onClick = {() => {props.updateSteps({id:props.User.id, action: "-"})}}>
                            <i class="fa-solid fa-minus"></i>
                        </div>

                    </div>
                </div>
                {/* End of Details of Steps */}

            </div>
            <div className={Styles.contents}>

                {/* Details of Workout */}

                <div className={Styles.content2}>

                    <div className={Styles.calender}>

                        <div className={Styles.currentdate}>
                            <i id={Styles.icon1} class="fa-solid fa-user-check fa-lg"></i>
                            {props.User.CurrentDate}
                        </div>
                        
                        {
                            props.User.isDeadlineOver
                            ?
                            <div className={Styles.scheduledate} style={{background: '#CC3838', padding:'5px', borderRadius: '8px'}}>
                                <i id={Styles.icon2} class="far fa-calendar fa-lg"></i>
                                {props.User.ScheduleDate}
                            </div>
                            :
                            <div className={Styles.scheduledate}>
                                <i id={Styles.icon2} class="far fa-calendar fa-lg"></i>
                                {props.User.ScheduleDate}
                            </div>
                            
                        }
                    </div>

                    <div className={Styles.arrow}>
                        <Link to={`/${props.User.id}/workout`} style={ linkStyle }>
                            {
                                props.User.isDeadlineClose
                            ?
                            <div id={Styles.arrow} style={{background: '#CC3838'}}>
                                <i class="fa-solid fa-exclamation"></i>
                            </div>
                            :
                            <div id={Styles.arrow}>
                                <i  class="fa-solid fa-angle-right"></i>
                            </div>
                            }
                        </Link>
                    </div>
                </div>

                {/* End of Details of Workout */}

            </div>
            <div className={Styles.contents}>

                {/* Details of Nutrition */}

                <div className={Styles.content3}>
                    
                    <div className={Styles.piechart}>

                            <PieChart
                                data={[
                                    { title: "Protien", value: props.User.Protien, color: "#F45C84" },
                                    { title: "Carbs", value: props.User.Carbs, color: "#F5C90F" },
                                    { title: "Fats", value: props.User.Fats, color: "#03C7FC" },
                                ]}
                                lineWidth={25}
                                startAngle={245}

                                label = {()=> `${props.User.BurntCalorie}`}
                                labelStyle={{
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontFamily: 'Montserrat',
                                    fill: "#FFFFFF",
                                    fontWeight: "450",
                                    lineHeight: "20px",
                                }}
                                labelPosition={0}
                            />
                    </div>

                    <div className={Styles.calorie}>

                        <div id={Styles.plus} onClick = {() => {props.updateCalorie({ id: props.User.id, action: "+" })}}>
                            <i class="fa-solid fa-plus"></i>
                        </div>

                        <div id={Styles.line3}>
                            {props.User.TargetCalorie}K
                        </div>
                        <div id={Styles.line4}>
                            target
                        </div>

                        <div id={Styles.minus} onClick = {() => {props.updateCalorie({ id: props.User.id, action: "-" })}}>
                            <i class="fa-solid fa-minus"></i>
                        </div>

                    </div>
                    
                    <div className={Styles.arrow}>
                        <Link to={`/${props.User.id}/nutrition`} style={linkStyle}>
                            <div id={Styles.arrow}>
                                <i  class="fa-solid fa-angle-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                
                {/* End of Details of Nutrition */}

            </div>
            
            {/* Notification Button */}
            
            <div className={Styles.notification}>
                <div className={Styles.bell}>
                    <i class="fa-regular fa-bell fa-lg"></i>
                </div>

            </div>
        
        </div>
    );
};

export default Row;