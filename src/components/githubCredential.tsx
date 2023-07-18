import { FaGithub } from 'react-icons/fa';

export default function GithubCredential() {
  return (
    <div className='bg-gradient-to-r from-[#42275a] to-[#734b6d] rounded-xl p-4 w-[304px] mb-8'>
      <div className='flex items-center space-x-16 mb-2'>
        <span className='text-white text-2xl font-bold mr-2'>Github Credential</span>
        <FaGithub className='w-12 h-auto mr-1 text-white'/>
      </div>
      <div className='text-white'>
        <p className='font-bold '>ID</p>
        <p className='break-words mb-3'>vc:hid:testnet:zAvbp2uKuX5XZLrDodpnH3JEdEweTuqngVwnW6tui6uC2</p>
        <p className='font-bold '>ISSUER</p>
        <p className='break-words mb-3'>did:hid:testnet:z6ary7M7yNFPMStGXwYByUoaLoCTp8D1Ux6sW7ByxxkFm</p>
        <div className='grid grid-cols-2'>
          <div>
            <p className='font-bold '>ISSUED AT</p>
            <p>2023/7/18</p>
          </div>
          <div>
            <p className='font-bold '>VALID TILL</p>
            <p>2027/7/18</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
