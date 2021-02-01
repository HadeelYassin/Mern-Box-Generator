import React from 'react'

const Boxes = (props) => {
    const {boxes}= props;
    return (
        <>{
            
            boxes.map((item, i)=>{
            let style={backgroundColor:item, width:"200px",height:"200px", display:"inline-block", margin:20};
            return <div key={i} style={style}></div>
             } )
            }
                
        </>
    );
}
export default Boxes;


