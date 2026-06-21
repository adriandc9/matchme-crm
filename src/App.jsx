import { useState} from 'react'
import mmcfNavLogo from './assets/mmcf-logo-nav.svg'

const App = () => {
  return (
    <nav className='px-4 bg-gray-100'>
      <div className='max-w-screen-2xl m-auto flex justify-between items-center'>
        <a href='#'><img className="logo" src={mmcfNavLogo} alt="Match:Me" /></a>
        <ul className='flex gap-2 lg:gap-8 xl:gap-16'>
          <li><a href='#'className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>How we work</a></li>
          <li><a href='#'className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>About Us</a></li>
          <li><a href='#'className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>Products</a></li>
          <li><a href='#'className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>Calculator</a></li>
          <li><a href='#'className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>News</a></li>
          <li><a href='#'className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>FAQ</a></li>
        </ul>
        <a href='#'><i className='bi bi-person text-2xl p-2 text-gray-500 hover:text-gray-900 transition'></i></a>
      </div>
    </nav>
  )
}

export default App