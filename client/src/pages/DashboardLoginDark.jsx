import { IllustrationLogin, Logodark, Password, Username } from '../assets';

export default function DashboardLoginDark() {
  return (
    <div className='bg-customBlack min-h-screen flex flex-col'>
      <div className='mt-14 ml-16'>
        <img src={ Logodark } alt="Logo" className='h-6 text-white' />
      </div>
      <div className="h-[320px] w-[600px] flex pt-8 px-6 mx-auto mt-56 rounded-md bg-customPurple">
        <div className='w-1/2 p-4 flex flex-col gap-6'>
          <div className='flex items-center gap-2 border rounded-sm hover:border-customPurple px-3 py-1 text-sm w-full bg-white'>
            <img src={ Username } alt="" className='w-4' />
            <input
              type='text'
              placeholder='Username'
              className='focus:outline-none w-full'
            />
          </div>
          <div className='flex items-center gap-2 border rounded-sm hover:border-customPurple px-3 py-1 text-sm w-full bg-white'>
            <img src={ Password } alt="" className='w-4' />
            <input
              type='password'
              placeholder='Password'
              className='focus:outline-none w-full'
            />
          </div>
          <div className='text-sm flex gap-2 my-3'>
            <input
              type='checkbox'
              className='border rounded-sm w-4'
            />
            <p className='text-customBlack font-light'>Remember me</p>
            <p className='text-customBlack font-light'>Forgot password</p>
          </div>
          <div>
            <button className='bg-customBlack text-white text-sm w-full px-3 py-2 hover:bg-blue-800'>
              Log in
            </button>
            <p className='flex gap-1 text-sm font-light text-customBlack'>
              <p>Or</p>
              <p>register now!</p>
            </p>
          </div>
        </div>
        <div>
          <img src={IllustrationLogin} alt="IllustrationLogin" className='h-64' />
        </div>
      </div>
    </div>
  )
}
