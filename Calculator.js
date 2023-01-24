import React, { useState } from 'react'

export default function Calculator() {
    const [val,setVal]=useState("");

    const backspace=()=>{
        try{
            setVal(val.slice(0,-1))
        }catch(error) {
            setVal("")
        }
    }

    const calculate =()=> {
        try{
            setVal(eval(val));
        }catch (error){
            setVal("Error")
        }
    }
  return (
    <div>
        <div classname="container my-2">
        <div className='row'>
            <div className='col-12'> 
            <h1 className='display-5 fw-bolder text-center'>CALCULATOR</h1>
            <hr/>
            </div>
              </div>
              <div className='row justify-content-center'>
            <div className='col-md-3'> 
              <div class="card  mb-3" >
                <div class="card-body text-primary">
                    <input type="text" className="form-control form-control-lg mb-4
                    text-center text-primary shadow" value={val} onChange={(e)=>setVal(e.target.value)}/>
                    <div className='row'>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="1" onClick={(e)=>setVal(val + e.target.value)}>1</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="2" onClick={(e)=>setVal(val + e.target.value)}>2</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="3" onClick={(e)=>setVal(val + e.target.value)}>3</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="c" onClick={()=>backspace()}>C/CE</button>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="4" onClick={(e)=>setVal(val + e.target.value)}>4</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="5" onClick={(e)=>setVal(val + e.target.value)}>5</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="6" onClick={(e)=>setVal(val + e.target.value)}>6</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="+" onClick={(e)=>setVal(val + e.target.value)}>   +  </button>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="7" onClick={(e)=>setVal(val + e.target.value)}>7</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="8" onClick={(e)=>setVal(val + e.target.value)}>8</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="9" onClick={(e)=>setVal(val + e.target.value)}>9</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="*" onClick={(e)=>setVal(val + e.target.value)}>   X  </button>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="." onClick={(e)=>setVal(val + e.target.value)}>.</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="0" onClick={(e)=>setVal(val + e.target.value)}>0</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="=" onClick={()=>calculate()}>=</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-light text-primary shadow '
                            value="/" onClick={(e)=>setVal(val + e.target.value)}>  / </button>
                        </div>
                    </div>
                </div>
              </div>
              </div>
              </div>
        </div>
    </div>
  )
}
