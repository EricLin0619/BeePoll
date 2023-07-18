import { FaGithub } from 'react-icons/fa';

export default function GithubCredential() {
  return (
    <div className='cursor-pointer bg-gradient-to-r from-[#42275a] to-[#734b6d] rounded-xl p-4 w-[350px] mb-8'>
      <div className='flex items-center mb-2'>
        <span className='text-white text-2xl font-bold mr-2'>Github</span>
        <FaGithub className='w-12 h-auto ml-auto mr-1 text-white'/>
      </div>
      <div className='text-white'>
        <p className='font-bold '>ID</p>
        <p className='break-words mb-3 text-[#cccccc] text-sm'>vc:hid:testnet:zAvbp2uKuX5XZLrDodpnH3JEdEweTuqngVwnW6tui6uC2</p>
        <p className='font-bold '>ISSUER</p>
        <p className='break-words mb-3 text-[#cccccc] text-sm'>did:hid:testnet:z6ary7M7yNFPMStGXwYByUoaLoCTp8D1Ux6sW7ByxxkFm</p>
        <div className='grid grid-cols-2'>
          <div>
            <p className='font-bold '>ISSUED AT</p>
            <p className='text-[#cccccc] text-sm'>2023/7/18</p>
          </div>
          <div>
            <p className='font-bold '>VALID TILL</p>
            <p className='text-[#cccccc] text-sm'>2027/7/18</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
