import React from 'react';

import Styles from './Style.module.css';

import { useParams } from 'react-router-dom';

export const Nutrition = (props) => {
    
    const { id } = useParams();

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.text}>
                    Nutrition page for User Id: {id}
                </div>
            </div>
        </div>
    );
};

export default Nutrition;