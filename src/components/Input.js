import React, {useState} from "react";
import Image from "next/image";
export default function Input({placeholder, errorMessage, icon, type}){
    const [error, seterror] = useState(false)
    return(
        <div className="mt-5">
            <div className={"flex border relative h-[50px] p-1" + (error ? " border-red-500":"")}>
                <input type={type} placeholder={placeholder} className=" focus:outline-none" onSelect={()=>{seterror(false)}} onBlur={(e)=>{
                    if(e.target.value =="" && errorMessage){
                        seterror(true)
                    }
                }}></input>
                <Image src={icon} width={25} height={0} className=" absolute right-0 top-[25%]"></Image> 
            </div>
            
            {error?(
                <p className=" text-red-500">{errorMessage}</p>
            ):(
                <></>
            )}
        </div>
    )
}