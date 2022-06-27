import logo from './logo.svg';
import './App.css';
import { FiSettings } from "react-icons/fi";

const DATASAMPLE= [
{
  "quantity": 1,
  "lmtpx": 30036,
  "spread": -14.21,
  "lmtpx_ask": 29994,
  "quantity_ask": 1
},
{
  "quantity": 5,
  "lmtpx": 30032,
  "spread": -11.16,
  "lmtpx_ask": 29998,
  "quantity_ask": 5
},
{
  "quantity": 10,
  "lmtpx": 30027,
  "spread": -9.52,
  "lmtpx_ask": 29998,
  "quantity_ask": 10
},
{
  "quantity": 50,
  "lmtpx": 30003,
  "spread": 5.19,
  "lmtpx_ask": 30018,
  "quantity_ask": 50
},
{
  "quantity": 100,
  "lmtpx": 29939,
  "spread": 37.36,
  "lmtpx_ask": 30051,
  "quantity_ask": 100
}
]

function App() {
  return (
    <div> 
      <header className="h-[10vh] bg-[#fca5a5]">
        <p className="text-[#f5f3ff]">Header</p>
      </header>
      <body className='h-[80vh] flex space-x-2 bg-black '>
        <div className="p-6 max-w-sm bg-[#27272a] rounded-[4px] items-center text-white w-1/3 h-2/3">
          <div className="flex justify-center relative ">
            <div className="flex mr-3" >
              <img className="h-5 w-5 mt-1" src="/img/BTC.png" alt="bitcoin"/>
              <div class="text-xl font-medium text-[16px] pl-2">BTC</div>
            </div>
            <div className="flex">
              <img className="h-5 w-5 mt-1" src="/img/USDT.png" alt="tether"/>
              <div class="text-xl font-medium text-[16px] pl-2">USDT</div>
            </div>
            <div className='absolute top-0 right-0 flex items-center space-x-2'>
              <div className='rounded-full bg-[#16a34a] w-4 h-4  '/>
              <FiSettings className='h-[3.5] text-white '/>
            </div>
            

          </div>
          <div className="flex m-2 justify-between text-center my-4">
            <p className='w-1/3 text-[26px]'>30000</p>
            <p className='w-1/3 justify-center flex'><div className='bg-[#52525b] w-1/3 rounded-[4px] text-[12px] my-2'>3.5</div></p>          
            <p className='w-1/3 text-[26px]'>31000</p>
          </div>
          <div className='justify-center flex my-1'>
            <div className='bg-[#18181b] w-1/3 text-center text-[16px] border border-slate-600'>10</div>
          </div>
          
          <div className='w-full justify-between flex space-x-1'>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'> <p>Bid</p> </button>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'>RFG</button>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'>Offer</button>
          </div>
          <div className='w-full text-center '>
            <table className='w-full'>
              <thead>
                <tr className='text-[12px]'>
                  <th >QTY</th>
                  <th>LMT PX</th>
                  <th>SPREAD(BPS)</th>
                  <th>LMT PX</th>
                  <th>QTY</th>
                </tr>
              </thead>
              <tbody>
                
                {DATASAMPLE.map((item, index) => (
                <tr key={index}>
                  <td> <div className='bg-[#18181b] rounded-[4px] text-[14px] border border-slate-600'>{item.quantity}</div></td>
                  <td><div className='text-[18px]'>{item.lmtpx}</div></td>
                  <td className='justify-center flex'><div className='bg-[#52525b] w-1/2 text-[12px] my-2 rounded-[4px]' >{item.spread}</div></td>
                  <td><div className='text-[18px]'>{item.lmtpx_ask}</div></td>
                  <td><div className='bg-[#18181b] rounded-[4px] text-[14px] border border-slate-600'>{item.quantity_ask}</div></td>
                </tr>
                ))  }
              </tbody>
            </table>
          </div>
          
        </div>
        <div className="p-6 max-w-sm bg-[#27272a] rounded-[4px] items-center text-white w-1/3 h-2/3">
          <div className="flex justify-center relative ">
            <div className="flex mr-3" >
              <img className="h-5 w-5 mt-1" src="/img/ETH.png" alt="bitcoin"/>
              <div class="text-xl font-medium text-[16px] pl-2">ETH</div>
            </div>
            <div className="flex">
              <img className="h-5 w-5 mt-1" src="/img/USDT.png" alt="tether"/>
              <div class="text-xl font-medium text-[16px] pl-2">USDT</div>
            </div>
            <div className='absolute top-0 right-0 flex items-center space-x-2'>
              <div className='rounded-full bg-[#16a34a] w-4 h-4  '/>
              <FiSettings className='h-[3.5] text-white '/>
            </div>
            

          </div>
          <div className="flex m-2 justify-between text-center my-4">
            <p className='w-1/3 text-[26px]'>30000</p>
            <p className='w-1/3 justify-center flex'><div className='bg-[#52525b] w-1/3 rounded-[4px] text-[12px] my-2'>3.5</div></p>          
            <p className='w-1/3 text-[26px]'>31000</p>
          </div>
          <div className='justify-center flex my-1'>
            <div className='bg-[#18181b] w-1/3 text-center text-[16px] border border-slate-600'>10</div>
          </div>
          
          <div className='w-full justify-between flex space-x-1'>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'> <p>Bid</p> </button>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'>RFG</button>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'>Offer</button>
          </div>
          <div className='w-full text-center '>
            <table className='w-full'>
              <thead>
                <tr className='text-[12px]'>
                  <th >QTY</th>
                  <th>LMT PX</th>
                  <th>SPREAD(BPS)</th>
                  <th>LMT PX</th>
                  <th>QTY</th>
                </tr>
              </thead>
              <tbody>
                
                {DATASAMPLE.map((item, index) => (
                <tr key={index}>
                  <td> <div className='bg-[#18181b] rounded-[4px] text-[14px] border border-slate-600'>{item.quantity}</div></td>
                  <td><div className='text-[18px]'>{item.lmtpx}</div></td>
                  <td className='justify-center flex'><div className='bg-[#52525b] w-1/2 text-[12px] my-2 rounded-[4px]' >{item.spread}</div></td>
                  <td><div className='text-[18px]'>{item.lmtpx_ask}</div></td>
                  <td><div className='bg-[#18181b] rounded-[4px] text-[14px] border border-slate-600'>{item.quantity_ask}</div></td>
                </tr>
                ))  }
              </tbody>
            </table>
          </div>
          
        </div>
        <div className="p-6 max-w-sm bg-[#27272a] rounded-[4px] items-center text-white w-1/3 h-2/3">
          <div className="flex justify-center relative ">
            <div className="flex mr-3" >
              <img className="h-5 w-5 mt-1" src="/img/SOL.png" alt="bitcoin"/>
              <div class="text-xl font-medium text-[16px] pl-2">SOL</div>
            </div>
            <div className="flex">
              <img className="h-5 w-5 mt-1" src="/img/USDT.png" alt="tether"/>
              <div class="text-xl font-medium text-[16px] pl-2">USDT</div>
            </div>
            <div className='absolute top-0 right-0 flex items-center space-x-2'>
              <div className='rounded-full bg-[#16a34a] w-4 h-4  '/>
              <FiSettings className='h-[3.5] text-white '/>
            </div>
            

          </div>
          <div className="flex m-2 justify-between text-center my-4">
            <p className='w-1/3 text-[26px]'>30000</p>
            <p className='w-1/3 justify-center flex'><div className='bg-[#52525b] w-1/3 rounded-[4px] text-[12px] my-2'>3.5</div></p>          
            <p className='w-1/3 text-[26px]'>31000</p>
          </div>
          <div className='justify-center flex my-1'>
            <div className='bg-[#18181b] w-1/3 text-center text-[16px] border border-slate-600'>10</div>
          </div>
          
          <div className='w-full justify-between flex space-x-1'>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'> <p>Bid</p> </button>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'>RFG</button>
            <button className='bg-[#52525b] rounded-[4px] w-1/3 text-[16px]'>Offer</button>
          </div>
          <div className='w-full text-center '>
            <table className='w-full'>
              <thead>
                <tr className='text-[12px]'>
                  <th >QTY</th>
                  <th>LMT PX</th>
                  <th>SPREAD(BPS)</th>
                  <th>LMT PX</th>
                  <th>QTY</th>
                </tr>
              </thead>
              <tbody>
                
                {DATASAMPLE.map((item, index) => (
                <tr key={index}>
                  <td> <div className='bg-[#18181b] rounded-[4px] text-[14px] border border-slate-600'>{item.quantity}</div></td>
                  <td><div className='text-[18px]'>{item.lmtpx}</div></td>
                  <td className='justify-center flex'><div className='bg-[#52525b] w-1/2 text-[12px] my-2 rounded-[4px]' >{item.spread}</div></td>
                  <td><div className='text-[18px]'>{item.lmtpx_ask}</div></td>
                  <td><div className='bg-[#18181b] rounded-[4px] text-[14px] border border-slate-600'>{item.quantity_ask}</div></td>
                </tr>
                ))  }
              </tbody>
            </table>
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
