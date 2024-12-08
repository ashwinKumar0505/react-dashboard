import React from 'react'
import {
  FaChartLine,
  FaEye,
  FaRobot,
  FaWallet,
  FaBook,
  FaUsers,
  FaLifeRing,
  FaCheckCircle
} from 'react-icons/fa'

const menuItems = [
  { label: 'Markets', icon: <FaChartLine />, link: '#' },
  { label: 'Watchlist', icon: <FaEye />, link: '#' },
  { label: 'AI Trading Bots', icon: <FaRobot />, link: '#' },
  { label: 'Wallet', icon: <FaWallet />, link: '#' },
  { label: 'Guides', icon: <FaBook />, link: '#' },
  { label: 'Community', icon: <FaUsers />, link: '#' },
  { label: 'Support', icon: <FaLifeRing />, link: '#' }
]

const Sidebar = () => {
  return (
    <div className='w-64 bg-white shadow-lg'>
      <div className='p-6'>
        <div className='flex items-center mb-6'>
          <img
            src='images/logo.jpg'
            alt='AI Broker Logo'
            className='w-10 h-10'
          />
          <span className='ml-3 text-xl font-bold'>AI BROKER</span>
        </div>
        <div className='flex items-center mb-6'>
          <img
            src='images/profile.jpg'
            alt='User Profile Picture'
            className='w-10 h-10 rounded-full'
          />
          <div className='ml-3'>
            <p className='font-semibold'>Paul Nichols</p>
            <p className='text-sm text-green-500'>
              Verified <FaCheckCircle className='inline' />
            </p>
          </div>
        </div>
        <div className='mb-6'>
          <p className='text-gray-500'>Total Balance</p>
          <p className='text-2xl font-bold'>
            $15,453.05 <span className='text-green-500 text-sm'>+9.24%</span>
          </p>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className='mb-4'>
                <a
                  href={item.link}
                  className='flex items-center text-gray-600 hover:text-blue-500'
                >
                  {item.icon}
                  <span className='ml-3'>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-6 p-4 bg-blue-100 rounded-lg text-center'>
          <p className='text-sm'>UPGRADE TO</p>
          <p className='font-bold'>Professional Tier</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
