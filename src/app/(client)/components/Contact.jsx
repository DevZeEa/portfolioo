import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

import Textarea from '@mui/joy/Textarea';

function Contact() {
    return ( 
        <>
 <div className="parent py-[100px] md:py-[150px]">
 <div className="contact-info flex flex-col gap-2 py-8">
        <h1 className='text-white font-medium text-center text-2xl md:text-4xl'>Contact me</h1>
        <p className='text-[#959595] text-center'>Cultivating Connections: Reach Out and Connect with Me</p>
    </div>
    <Grid container spacing={2} className='w-full' >
    <Grid item md={12} lg={12} xl={6} className='w-full'> 
        <form className='flex flex-col gap-5 w-full items-center 2xl:items-end'>
           <input type="text" name="username" placeholder='Name' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
           <input type="number" name="phoneNumber" placeholder='Phone Number' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
           <input type="text" name="Timeline" placeholder='Timeline' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
        </form>
    </Grid>
    <Grid item md={12} lg={12} xl={6} className='w-full'> 
        <form className='flex flex-col gap-5 w-full items-center  2xl:items-start'>
        <input type="email" name="email" placeholder='email' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
  <select id="countries" className="bg-[#FFFFFF0A] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-none block p-2.5 dark:bg-[#FFFFFF0A] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#959595] dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none p-4 w-3/4 border-none">
    <option >Service of Interest</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select> 
  <Textarea
    placeholder="Project Details"
    className='w-3/4 h-28 bg-[#FFFFFF0A] border-0 outline-none focus:outline-none shadow-none focus:shadow-none !placeholder:text-[#959595] !text-[#959595]'
    sx={{ mb: 1,
    '--Textarea-focusedHighlight' : {
    color:'transparent',
    }

     }}
  />

<div className="button flex  justify-center lg:justify-start w-3/4">
<Button variant="outlined" className='w-fit px-7' sx={{color:'white',border: 1,
textTransform:'capitalize'
}
}>Send</Button>
  </div>
  </form>
    </Grid>
    </Grid> </div>   
        </>
     );
}

export default Contact;