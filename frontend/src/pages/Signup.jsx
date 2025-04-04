
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarming from '../components/BottomWarming'

const Signup = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign Up"}/>
          <SubHeading label={"Enter your information to create an account"}/>
          <InputBox placeholder="John" label={"First Name"} />
          <InputBox placeholder="Doe" label={"Last Name"} />
          <InputBox placeholder="johndoe@gmail.com" label={"Email Address"} />
          <InputBox placeholder="123456" label={"Password"} />

          <div className='pt-4'>
            <Button label={"Sign Up"} />
          </div>

          <BottomWarming label={"Already have an account?"} to={"/signin"} buttonText={"SignIn"} home={"/"} buttonTextHome={"Click Here"}/>
        </div>
      </div>
    </div>
  )
}

export default Signup