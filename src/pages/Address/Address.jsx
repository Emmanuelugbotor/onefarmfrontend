import './address.scss'
import {states} from "../../component/state"
import {useForm} from 'react-hook-form';
import {useState, useEffect} from 'react'
export default function Address() {
    const {register,handleSubmit,formState:{errors}} = useForm();
    // handle the populating of the state and lga..
    const [state, setState] = useState('Abuja')
    const [choosenState, setChoosenState] = useState()
    const {onChange, ...rest} = register("")
    function onSubmit(data){
       console.log({...data,state})
    }
useEffect(()=>{
    if(state){
      const selectedState =  states.filter((c)=> c.name === state);
      setChoosenState(selectedState[0])
    }
}, [state])
  return <div className="address">
      <div className="image_logo">
          <img src="/images/main-logo.png" alt="" className="header__logo" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Shipping Address</h2>
            <div className="form_wrapper">
                <div className="form_field">
                    <label htmlFor="">first Name <span style={{color:"red"}}>*</span></label>
                    <input type="text" {...register("firstName", {required:"Enter Name"})}/>
                </div>
                <div className="form_field">
                <label htmlFor="">last Name <span style={{color:"red"}}>*</span></label>
                    <input type="text" {...register("lastName", {required:"Enter last Name"})}/>
                </div>
            </div>
            <div className="form_field">
                <label htmlFor="">Address line 1 <span style={{color:"red"}}>*</span></label>
                <input type="text" {...register("address1", {required:"enter address info"})} />
            </div> 
            <div className="form_field">
            <label htmlFor="">Address line 2</label>
                <input type="text"  />
            </div>
            <div className="form_wrapper">

                <div className="form_field">
                    <label htmlFor="">State <span style={{color:"red"}}>*</span></label>
                    <select name="" {...register("state", {required:"please select a state.."})} onChange={(e)=>setState(e.target.value)}>
                        {
                            states.map((state, index)=>{
                                return <option value={state.name} key={index}>{state.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form_field">
                    <label htmlFor="">Lgas <span style={{color:"red"}}>*</span></label>
                    <select name="" {...register("lga", {required:"please select a lga.."})} >
                        {
                           choosenState &&  choosenState.lgas.map((lga, index)=>{
                                return <option value={lga} key={index}>{lga}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="form_wrapper">
                <div className="form_field">
                    <label htmlFor="">City <span style={{color:"red"}}>*</span></label>
                    <input type="text" {...register("City", {required:"Enter city name"})}/>
                </div>
                <div className="form_field">
                    <label htmlFor="">Phone number <span style={{color:"red"}}>*</span></label>
                    <input type="text" {...register("phone", {required:"Enter phone number"})} />
                </div>
            </div>
            <div className="form_field">
                <label htmlFor="">Email Address <span style={{color:"red"}}>*</span></label>
                <input type="email" {...register("email", {required:"enter a valid email"})} />
            </div>
            <div className="form_field">
                <button type="submit"><span>Continue</span></button>
            </div>
        </form>
  </div>;
}
