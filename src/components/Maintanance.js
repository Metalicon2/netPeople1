import React from 'react';
import {
    Wave
} from 'better-react-spinkit';

const Maintanance= ({pageName}) => {
    return (
        <div className='flex flex-column'>
            <div className='tc'>The <p className='dib b'>{pageName}</p> page is under development...</div>
            <Wave className='pa3 center'size={50}/>
        </div>
    );
}

export default Maintanance;