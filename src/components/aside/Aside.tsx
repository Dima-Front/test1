import React from 'react';

import Tree from "../../custom/tree/Tree";

interface AsideProps {
    tree: any
}

const Aside: React.FC<AsideProps> = ({tree}) => {

    return (
        <>
            <div className='left-page'>
                <span>  Услуги </span>
                <div className='dropdown-group'>
                    <Tree tree={tree}/>
                </div>

            </div>

        </>

    );
};

export default Aside;


