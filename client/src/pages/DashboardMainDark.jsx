import { FaRegChartBar, FaRegListAlt, FaCog, FaUser, FaQuestionCircle, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { Logodark, Maindark } from '../assets';
import { LineChart, Line, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { FaArrowUp } from "react-icons/fa6"

const lineData = [
  { value: 3 },
  { value: 1 },
  { value: 8 },
  { value: 4 },
  { value: 6 },
  { value: 4 },
  { value: 1 },
];

const barData = [
  { value: 630 },
  { value: 200 },
  { value: 400 },
  { value: 208 },
  { value: 450 },
  { value: 500 },
];

const barGraphData=[
  { value: 'Jan', 2021: 60 ,2022: 240 },
  { value: 'B', 2021: 200 ,2022: 139 },
  { value: 'C', 2021: 400 ,2022: 200 },
  { value: 'D', 2021: 208 ,2022: 390 },
  { value: 'E', 2021: 459 ,2022: 480 },
  { value: 'F', 2021: 500 ,2022: 380 },
]
const pieData = [
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const colorPie = [ '#ff7777','#00f0c7','#694bdb' ];

export default function DashboardMainDark() {
  return (
    <div>
      <div className='fixed top-0 z-50 h-full w-2/12 bg-customBlack2 text-gray-300'>
        <div className='flex flex-col'>
          <div className='bg-black w-full py-5 px-14'>
            <img src={Logodark} alt="Logo" className='h-6'/>
          </div>
          <div className='p-5 flex items-center gap-3'>
            <FaRegChartBar/>
            <span>Dashboard</span>
          </div>
          <div className='p-5 flex items-center gap-3'>
            <FaRegListAlt/>
            <span>Orders</span>
          </div>
          <div className='p-5 flex items-center gap-3'>
            <FaUser/>
            <span>Account</span>
          </div>
          <div className='p-5 flex items-center gap-3'>
            <FaCog/>
            <span>Settings</span>
          </div>
          <div className='p-4 text-gray-500'>
            <span>Support</span>
          </div>
          <div className='p-5 ml-4 flex items-center gap-3'>
            <IoMdChatbubbles/>
            <span>Chat</span>
          </div>
          <div className='p-5 ml-4 flex items-center gap-3'>
            <FaQuestionCircle/>
            <span>FAQ</span>
          </div>
        </div>
      </div>

      <div className='fixed flex justify-between top-0 z-50 w-10/12 py-3 px-14 ml-2/12 bg-customBlack2'>
        <div className='flex items-center gap-3 bg-customBlack2 rounded-full w-60 px-3 py-2 border'>
          <FaSearch className='text-gray-400'/>
          <input
            type='text'
            placeholder='search'
            className='text-gray-400 bg-customBlack2 focus:outline-none'
          />
        </div>
        <div className='flex items-center gap-8'>
          <FaBell className='text-gray-300' />
          <span className='border-l-2 pl-8 text-gray-300'>
            Matt Appleyard
          </span>
          <FaUserCircle className='text-gray-300' size={30}/>
        </div>
      </div>
      
      <div className='fixed flex gap-12 ml-2/12 w-10/12 mt-16 p-12 bg-customBlack text-gray-300'>
        <div className='flex flex-col gap-12 w-2/3'>
          <div className='flex gap-4 bg-black h-44 rounded-md px-10 py-7'>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold'>Welcome to your dashboard!</p>
              <p className='text-sm text-gray-400'>
                <p>Try our new Admin Dashboard Template, build with </p>
                <p>live Ant-Design components. Customize it to your </p>
                <p>needs and release to production!</p>
              </p>
            </div>
            <img src={ Maindark } alt="" className='h-40 -mt-5' />
          </div>
          <div className='h-32 flex gap-12'>
            <div className='bg-black rounded-md w-1/2 flex items-center p-5'>
              <div className='flex flex-col gap-3 w-4/6'>
                <p className='uppercase text-sm'>chart title</p>
                <p className='font-semibold text-xl -mt-3'>2,643</p>
                <p className='flex gap-1 text-sm'>
                  <FaArrowUp className='text-customGreen2'/>
                  <span>1.10% Since yesterday</span>
                </p>
              </div>
              <ResponsiveContainer width="50%" height={100}>
                <LineChart data={lineData}>
                  <Line type="monotone" dataKey="value" stroke="#ff7777" dot={false} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className='bg-black rounded-md w-1/2 flex items-center p-5'>
              <div className='flex flex-col gap-3 w-4/6'>
                <p className='uppercase text-sm'>chart title</p>
                <p className='font-semibold text-xl -mt-3'>2,643</p>
                <p className='flex gap-1 text-sm'>
                  <FaArrowUp className='text-customGreen2'/>
                  <span>1.10% Since yesterday</span>
                </p>
              </div>
              <ResponsiveContainer width="50%" height={100}>
                <LineChart data={lineData}>
                  <Line type="monotone" dataKey="value" stroke="#f3c522" dot={false} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='bg-black h-64 rounded-md'>
            <div className='p-4'>
              Chart Title
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart  data={barGraphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="2021" fill="#694bdb" />
                <Bar dataKey="2022" fill="#ff7777" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='flex flex-col gap-12 w-1/3'>
          <div className='bg-black h-44 rounded-md'>
            <div className='p-4'>
              Chart Title
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={barData}>
                <Tooltip />
                <Bar dataKey="value" fill="#ff7777" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='bg-black rounded-md flex items-center p-5 h-32'>
            <div className='flex flex-col gap-3 w-4/6'>
              <p className='uppercase text-sm'>chart title</p>
              <p className='font-semibold text-xl -mt-3'>2,643</p>
              <p className='flex gap-1 text-sm'>
                <FaArrowUp className='text-customGreen2'/>
                <span>1.10% Since yesterday</span>
              </p>
            </div>
            <ResponsiveContainer width="50%" height={100}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="value" stroke="#05aa8d" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='bg-black h-64 rounded-md p-5'>
            <div className='flex justify-between'>
              <p>Chart Title</p>
              <p className='flex gap-1 text-sm '>
                <FaArrowUp className='text-customGreen2'/>
                <span>1.10% Since yesterday</span>
              </p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData.map((entry, index) => ({
                    ...entry,
                    fill: colorPie[index % colorPie.length],
                  }))}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
