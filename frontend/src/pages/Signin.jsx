import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarming from '../components/BottomWarming'

const Signin = () => {
  return (
    <div className='h-screen bg-slate-300 flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your email and password"} />
          <InputBox placeholder={"johndoe@gmail.com"} label={"Email Address"}/>
          <InputBox placeholder={"123456"} label={"Password"}/>

          <div className='pt-4'>
            <Button label={"Sign in"} />
          </div>
          <div>
            <BottomWarming label={"Don't have an account?"} to={"/signup"} buttonText={"SignUp"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin

