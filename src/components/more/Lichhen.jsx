import React, { useRef } from 'react'
import MetaData from './Metadata';
import "./Lichhen.css";

const Lichhen = () => {
    const formRef = useRef(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
       <>
       <MetaData title="Lichhen"/>
       <div 
       className='support'
       style={{
           width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0'
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center"
           }}>Đặt lịch hẹn xem xe</h2>
           <div>
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }} ref={formRef}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Tên của bạn ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }} 
                   name='user__name'
                   />
                    <input type="text" placeholder='Đặt lịch hẹn ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='user__subject'
                   />
                   <input type="email" placeholder='Email của bạn ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}/>
                   <textarea cols="30" rows="5" required placeholder='Ghi chú thêm ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                }}
                name='user__message'
                   ></textarea>
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#3BB77E",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Submit</button>
               </form>
               <div className='animation'>

               </div>
           </div>
       </div>
       </>
    )
}

export default Lichhen
