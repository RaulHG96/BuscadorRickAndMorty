import FondoRickMorty from '../img/rick-morty.png';

const Fondo = () => {
  return (
    // <div className='flex items-center text-[#A6F490]'>
    <div>
        <div className="absolute w-full h-full top-0 left-0 shadow-[#34f536] z-10 shadow-inner">
          <img src={FondoRickMorty} alt="Fondo Rick y Morty" className='h-full w-1/2 mx-auto opacity-[0.4]'/>
        </div>
        {/* <div className="absolute w-full h-full top-0 left-0 bg-[#34f536] opacity-[0.05]"></div> */}
    </div>
  )
}

export default Fondo