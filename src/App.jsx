import { useState } from 'react'
import mmcfNavLogo from './assets/mmcf-logo-nav.svg'
import mmcfHeroLogo from './assets/mmcf-logo-hero.svg'
import vanElegant from './assets/van-elegant.png'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className='px-4 bg-gray-100 fixed w-full z-10'>
        <div className='max-w-screen-2xl h-14 m-auto flex justify-between items-center'>
          <a href='#'>
            <img className='logo' src={mmcfNavLogo} alt='Match:Me' />
          </a>
          <ul className='hidden md:flex gap-2 lg:gap-8 xl:gap-16'>
            <li><a href='#' className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>How we work</a></li>
            <li><a href='#' className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>About Us</a></li>
            <li><a href='#' className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>Products</a></li>
            <li><a href='#' className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>Calculator</a></li>
            <li><a href='#' className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>News</a></li>
            <li><a href='#' className='px-2 py-4 block text-gray-500 hover:text-gray-900 transition'>FAQ</a></li>
          </ul>
          <a href='#' className='hidden md:block'>
            <i className='bi bi-person text-2xl p-2 text-gray-500 hover:text-gray-900 transition'></i>
          </a>
          <button
            className='md:hidden p-2 text-3xl'
            onClick={() => setIsMenuOpen(true)}
          >
            <i className='bi bi-list'></i>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-72 h-screen bg-white shadow-xl z-50 transition-transform duration-300 ${
          isMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-4'>
          <img
            className='h-8'
            src={mmcfNavLogo}
            alt='Match:Me'
          />

          <button onClick={() => setIsMenuOpen(false)}>
            <i className='bi bi-x-lg text-xl'></i>
          </button>
        </div>

        <ul className='flex flex-col py-4'>
          <li><a href='#' className='block px-6 py-4 hover:bg-gray-100'>How we work</a></li>
          <li><a href='#' className='block px-6 py-4 hover:bg-gray-100'>About Us</a></li>
          <li><a href='#' className='block px-6 py-4 hover:bg-gray-100'>Products</a></li>
          <li><a href='#' className='block px-6 py-4 hover:bg-gray-100'>Calculator</a></li>
          <li><a href='#' className='block px-6 py-4 hover:bg-gray-100'>News</a></li>
          <li><a href='#' className='block px-6 py-4 hover:bg-gray-100'>FAQ</a></li>
        </ul>

        <div className='absolute bottom-0 left-0 right-0 p-4'>
          <a
            href='#'
            className='flex items-center gap-3 text-gray-600 hover:text-gray-900'
          >
            <i className='bi bi-person text-2xl'></i>
            <span>Account</span>
          </a>
        </div>

      </aside>

      <section className='min-h-[95vh] xl:min-h-[98vh] 2xl:min-h-[95vh] pt-14 overflow-hidden relative gradient-black'>
        <div className='h-[12%] w-full absolute bottom-0 gradient-floor'></div>
          <div class="max-w-screen-2xl m-auto h-stretch absolute w-full left-[50%] -translate-x-1/2 flex justify-center lg:justify-end">
            <div className='flex flex-col justify-start items-center lg:items-end pt-10 px-7 pb-5'>
              <img src={mmcfHeroLogo} className='h-[6vh] lg:h-[7vh] mb-[3vh]' alt='Match:Me' />
              <h2 className='text-4xl font-semibold text-white leading-[1.2em]'>Find Your</h2>
              <h1 className='text-[10vh] lg:text-8xl xl:text-9xl text-center lg:text-end font-bold text-white leading-[0.8]'><span className='gradient-gray'>Perfect</span> <span className='gradient-orange'>VAN</span><br className='hidden lg:block'></br> <span className='gradient-gray'>Deal</span></h1>
              <h2 className='text-4xl font-semibold text-white leading-[1.2em]'>in minutes</h2>
              <form className='hidden lg:flex flex-col items-center gap-4 mt-[2vh] text-center w-[450px] bg-neutral-800/90 rounded-2xl px-7 py-12 xl:py-8'>
                <h3 className='text-xl text-center text-white'>How much do you need?</h3>
                <div className="relative w-[75%]">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-white">
                    £
                  </span>
                  <input
                    type="number"
                    placeholder=""
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-gray-300
                      pl-8
                      pb-2
                      text-3xl
                      text-white
                      placeholder:text-gray-400
                      focus:outline-none
                      focus:border-white
                    "
                  />
                </div>
                <small className='font-sm text-light text-white'>No impact on your credit score</small>
                <button className='w-fit bg-orange-500 rounded-full text-md font-light cursor-pointer text-white py-1 px-6'>Get started</button>
              </form>
            </div>
            <img className='van-elegant absolute h-[40vh] top-full left-[98%] lg:left-[45%] xl:left-[50%] lg:h-[calc(85vh-56px)] max-w-none' src={vanElegant} alt='Match:Me' />
        </div>
      </section>

      <section className='bg-orange-700 min-h-[90vh]'></section>
      <section className='bg-gray-200 min-h-[90vh]'></section>
    </>
  )
} 

export default App