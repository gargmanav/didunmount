import React, { useState,useEffect,useRef } from 'react'

const Interview = () => {
     const [time,settime] = useState(new Date().toLocaleTimeString())
     let datatimer = useRef(null)
     
    
    
    const [data,setdata] = useState(0)
    const addfunc = ()=>{
        datatimer.current=setInterval(() => {
            setdata((previous)=>previous+1)
            settime(new Date().toLocaleTimeString())
        }, 1000);
        
    }
    
    

    const subfunc = ()=>{
       clearInterval(datatimer.current)
    }
    // const [data, setdata] = useState("")
    // const [result, setresult] = useState([])
    // const [answer,setanswer]  = useState([])
    // const addfunc = ()=>{
    //     setresult([...result,data])
    //     setanswer([...answer,false])
    // }
    // const deletefunc = (id)=>{
    //     const newresult = result.filter((ele,index)=>{
    //         return index != id
    //     })
    //     setresult(newresult)
    // }
    // const check = (id)=>{
    // //     const newAnswer = [...answer];
    // // newAnswer[id] = true;
    // // setanswer(newAnswer);
    // }
  return (
    <>


    <h1>{data}</h1>
    <button onClick={addfunc}>Start</button>
    <button onClick={subfunc}>Stop</button>



    <h1>{time}</h1>
    {/* <input type="text" onChange={(e)=>setdata(e.target.value)}/>
    <button onClick={addfunc}>add</button>
    {
        result.map((ele,id)=>{
            <div key={id}>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Checkbox
            </label>
            <p>{ele}</p>
            {isChecked && <button onClick={() => deleteFunc(id)}>Delete</button>}
          </div>
        }) */}
    {/* } */}
    </>
  )
}

export default Interview