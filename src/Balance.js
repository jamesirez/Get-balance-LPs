import './App.css';
import { FiSettings } from "react-icons/fi";
import {MdHistory} from "react-icons/md"
import {FiSend} from "react-icons/fi"
import {FiArrowDown} from "react-icons/fi"
import {MdOutlineAttachMoney} from "react-icons/md"
import { AiFillCaretLeft } from "react-icons/ai";
import client from "./client_axios"
import { useEffect, useState } from 'react';

function App() {
  const [accountBalance , setAccountBalance] = useState({
    "ZGBP": "0",
    "USDT": "0"
  })
  async function getBalance(){
    try{

      const body = {
        "partner_id": "62b1a0945fc5c34c15d2feb5",
        "lp_id": "232313213",
        "cex_code": "kraken"
    }
      const response = await client.post("/account/balance", body )
      if (response.status == 200) setAccountBalance(response.data.data.account_balance)
      console.log(accountBalance)
    }catch(error){
      console.log("error", error)
    }
  }





  useEffect(() => {
    getBalance()
  }, [])
  return (
    <div> 
      <header className="h-[10vh] bg-[#fca5a5]">
        <p className="text-[#f5f3ff]">Header</p>
      </header>
      <body className='flex space-x-10 bg-black '>
        <div className="p-6 bg-[#27272a] rounded-[4px] items-center text-white w-1/3 h-full m-10">
          <div className="flex justify-center relative h-1/3 ">
            <div className='bg-[#525252] w-1/2 text-center rounded-[10px] border border-gray-300'>  
              <p>TOTAL VALUE</p>
              <p>$81,213</p> 
              <div className='flex justify-center space-x-[50px] mt-5'>
                <div>
                  <button className='rounded-full bg-[#9ca3af] h-10 w-10'>
                    <FiSend className=' m-3'/>                   
                  </button>
                  <p>Deposit</p>
                </div>      
                <div>
                  <button className='rounded-full bg-[#9ca3af] h-10 w-10'>
                    <MdHistory className='m-[10px] h-5 w-5'/>                   
                  </button>
                  <p>History</p>
                </div>                     
              </div> 
              <div className='mt-6 mb-4'>
                <p className='text-[16px]'>Kraken Exchange Wallet</p>
              </div>
              
            </div>
            <div className='absolute top-0 right-0 flex items-center space-x-2'>
              <div className='rounded-full bg-[#16a34a] w-4 h-4  '/>
              <FiSettings className='h-[3.5] text-white '/>
            </div>
          </div>
          <div>
            <div className='flex space-x-[300px]'>
              <p>My Tokens</p>
              <p>Manage</p>
            </div>
            

            {Object.keys(accountBalance).map((item,index) => (
              <div key={index} className='mt-5 bg-[#3f3f46] rounded-[10px] border border-gray-300'>
                <div className='flex space-x-2 ml-2'>
                  <img className="h-5 w-5 mt-1" src="/img/BTC.png" alt="bitcoin"/>
                  <p>{item}</p>
                  <p className='text-[12px] mt-1'>$1.001</p>
                </div>
                <div className='flex m-3 '>
                  <div className='w-1/3'>
                    <p className='text-[12px] '> Total</p>
                    <p> {accountBalance[item]}</p>
                    <p className='text-[12px] '> $21,213.1231</p>
                  </div>
                  <div className='w-1/3'>
                    <p className='text-[12px] '> Available</p>
                    <p> 0</p>
                    <p className='text-[12px] '> $0</p>
                  </div>
                  <div className='w-1/3'>
                    <p className='text-[12px] '> In Orders</p>
                    <p> 1.2311312141</p>
                    <p className='text-[12px] '> $21,213.1231</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>





        <div className=" bg-[#27272a] rounded-[4px] items-center text-white w-1/3 h-full m-10">
          <div className="flex justify-center relative h-1/3 mt-10 ">
            <div className="bg-[#171717] w-3/4 rounded-[10px] border border-slate-600 " style={{ backgroundImage: "url(/img/background.jpeg)" }}>  
              <p className='mt-2 text-right mr-3'>VALENS</p>
              <div className='flex mt-2 ml-4 space-x-5'>
                <AiFillCaretLeft className='h-6 w-6 mt-4'/>
                <img className="h-12 w-12 rounded-[10px] mt-1" src="/img/card.png" alt="card"/>
                <div className='text-[14px] mt-2'>
                  <p>TRAVEL</p>
                  <p>MILES</p>
                </div>
              </div>
              
              <p className='mt-2 ml-4 text-[24px]'>5480 6000 8231 9314</p> 
              <p className='text-[12px] mt-2 ml-4'>VALID THRU 03/22</p> 
              <div className='flex space-x-[120px]'>
                <div className='mt-3 mb-4'>
                  <p className='ml-4 text-[16px]'>HOANG DINH THANH</p>
                </div>
                <div className=''>
                  <p>VISA</p>
                  <p>Platinum</p>
              </div>
              </div>
              
            </div>
            
          </div>
          <div>
            <div className='flex'>
              <div className='bg-[#3f3f46] rounded-r-[40px] w-2/5 mt-5 text-[25px] flex border border-zinc-600'>
                <div className='bg-[#8b5cf6] rounded-r-[40px] w-1/3 h-[80px] flex my-3'>
                  <p className='text-[#8b5cf6]'>a</p>
                  <div className='bg-[#22c55e] rounded-[10px] h-[40px] w-[40px] m-5 ml-6' >
                    <MdOutlineAttachMoney className='m-2'/>
                  </div>
                  
                </div>
                <div>
                  <p className='ml-8 mt-4 text-[#8b5cf6] text-[14px] '>BALANCE</p>
                  <p className='ml-8'>$17,080</p>
                </div>
              
            </div>
            <div className='bg-[#3f3f46] rounded-[60px] mt-5 w-10 ml-[100px] border border-zinc-600 '>
              <FiArrowDown className='h-8 w-8 mt-8 ml-1 text-[#8b5cf6]'/>
            </div>
            <div className='mt-12 ml-3'>
              <p className='text-[8px]'>TODAY SPENT</p>
              <p className='text-[20px]'>$3,840</p>
            </div>
            </div>
            
            <div className='px-10'>
              <div className='mt-4 mb-2 '>
                <p>History</p>
              </div>

              <div className='mt-1 bg-[#3f3f46] flex rounded-[10px] border border-slate-600'>
                <div className='ml-6'>
                  <p>24-06-2022</p>
                  <p className='text-[12px]'>Receive from A</p>
                </div>
                <div className='ml-[160px] mt-3'>
                  <p className='text-[#16a34a]'> + $1,000</p>
                </div>
              </div>

              <div className='mt-1 bg-[#3f3f46] flex rounded-[10px] border border-slate-600'>
                <div className='ml-6'>
                  <p>24-06-2022</p>
                  <p className='text-[12px]'>Transfer to B</p>
                </div>
                <div className='ml-[160px] mt-3'>
                  <p className='text-[#e11d48]'> - $2,130</p>
                </div>
              </div>

              <div className='mt-1 bg-[#3f3f46] flex rounded-[10px] border border-slate-600'>
                <div className='ml-6'>
                  <p>24-06-2022</p>
                  <p className='text-[12px]'>Transfer to C</p>
                </div>
                <div className='ml-[160px] mt-3'>
                  <p className='text-[#e11d48]'> - $1,710</p>
                </div>
              </div>

              <div className='mt-1 bg-[#3f3f46] flex rounded-[10px] border border-slate-600'>
                <div className='ml-6'>
                  <p>24-06-2022</p>
                  <p className='text-[12px]'>Receive from A</p>
                </div>
                <div className='ml-[160px] mt-3'>
                  <p className='text-[#16a34a]'> + $3,156</p>
                </div>
              </div>

              <div className='mt-1 bg-[#3f3f46] flex rounded-[10px] border border-slate-600'>
                <div className='ml-6'>
                  <p>24-06-2022</p>
                  <p className='text-[12px]'>Receive from B</p>
                </div>
                <div className='ml-[160px] mt-3'>
                  <p className='text-[#16a34a]'> + $12</p>
                </div>
              </div>

              
            </div>

            

          </div>
        </div>


      </body>
      <footer className="h-[10vh] bg-[#fca5a5]">
        <p className="text-[#f5f3ff]">Footer</p>
      </footer>
    </div>
  );
}

export default App;
