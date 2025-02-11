import { FaSignal   } from 'react-icons/fa';
const Error = ()=> {
  return(
    <div className="bg-[#121212ea] relative w-[100%] min-h-[100vh] pt-28">
      <div className='m-auto w-fit flex flex-col items-center'>
        <FaSignal   className="text-amber-700 text-3xl"/>
        <p className='text-white pt-5 text-2xl'>Looks like you are not connected to the internet.</p>
      </div>
    </div>
  )
}

export default Error;