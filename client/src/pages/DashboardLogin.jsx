import { IllustrationLogin, Logo, Password, Username } from '../assets';

export default function DashboardLogin() {
  return (
    <div className='bg-customBg min-h-screen flex flex-col'>
      <div className='mt-14 ml-16'>
        <img src={ Logo } alt="Logo" className='h-6' />
      </div>
      <div className="h-[320px] w-[600px] flex pt-8 px-6 mx-auto mt-56 rounded-md bg-white">
        <div className='w-1/2 p-4 flex flex-col gap-6'>
          <div className='flex items-center gap-2 border rounded-sm hover:border-customPurple px-3 py-1 text-sm w-full'>
            <img src={ Username } alt="" className='w-4' />
            <input
              type='text'
              placeholder='Username'
              className='focus:outline-none w-full'
            />
          </div>
          <div className='flex items-center gap-2 border rounded-sm hover:border-customPurple px-3 py-1 text-sm w-full'>
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
              className='border rounded-sm bg-customPurple w-4'
            />
            <p className='font-light'>Remember me</p>
            <p className='text-customPurple font-light'>Forgot password</p>
          </div>
          <div>
            <button className='bg-customPurple text-white text-sm w-full px-3 py-2 hover:bg-customPurple2'>
              Log in
            </button>
            <p className='flex gap-1 text-sm font-light'>
              <p>Or</p>
              <p className='text-customPurple'>register now!</p>
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
