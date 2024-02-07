import Image from "next/image";
import React from "react";
import Input from "./Input";
import Link from "next/link";

export default function Form(){
    return(
        <section className=" w-screen h-[calc(100vh - 10%)] flex justify-center items-center">
            <div className=" w-[30%]">
                <span className=" text-[18px]">STEP 3 OF 3</span>
                <h1 className=" text-2xl font-bold">Set up your credit or debit <br></br>card</h1>
                <div className=" flex space-x-2 mt-5">
                    <Image src={"/VISA.png"} alt="visa image" width={40} height={0}></Image>
                    <Image src={"/MASTERCARD.png"} alt="master image" width={40} height={0}></Image>
                </div>
                <form className="mt-5">
                    <Input placeholder={"Card number"} errorMessage={"Please enter a card number"} icon={"/card.svg"} type='number'/>
                    <div className="flex space-x-2 ">
                        <Input type={'number'} placeholder={"Expiration date"} errorMessage={"Please enter an expiration date."}/>
                        <Input type={'number'} placeholder={"CVV"} errorMessage={"Please enter a CCV."} icon={"/help.svg"}/>
                    </div>
                    <Input type={'text'} placeholder={"First Name"} errorMessage={"Please enter you first name."} />
                    <Input type={'text'} placeholder={"Last Name"} errorMessage={""} />
                    <div className=" flex bg-gray-100 rounded my-5 p-5 relative">
                        <div>
                            <h3 className="text-lg font-bold">EGP 165/month</h3>
                            <span className=" text-slate-400">Premium</span>
                        </div>
                        <Link href={"#"} className=" absolute right-1  text-blue-500 font-bold">Change</Link>
                    </div>
                    <p className="mb-2">Your payments will be processed internationally. Additional bank fees may apply.</p>
                    <p className="mb-5">
                        By checking the checkbox below, you agree to our <Link href={"https://help.netflix.com/legal/termsofuse"} className="text-blue-500">Terms of Use</Link>, <Link href={"https://help.netflix.com/legal/privacy"} className="text-blue-500">Privacy Statement</Link>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently EGP 165/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
                    </p>
                    <div>
                        <div class="inline-flex items-center">
                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                                <input type="checkbox"
                                class="before:content[''] peer relative h-[25px] w-[25px] cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                id="check" />
                                <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                    stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                                </svg>
                                </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                                I agree
                            </label>
                        </div> 
                    </div>
                    <button className=" w-full bg-[#e50914] p-5 text-lg text-white rounded hover:brightness-125">Start Membership</button>
                </form>
            </div>
        </section>
    )
}