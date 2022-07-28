import React from 'react';

import Styles from '../Nutrition/Style.module.css';

import { useParams } from 'react-router-dom';

export const Workout = () => {
    
    const { id } = useParams();

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.text}>
                    Workout page for User Id: {id}
                </div>
            </div>
        </div>
    );
};

export default Workout;