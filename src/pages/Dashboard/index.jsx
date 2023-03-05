import { useState } from 'react'
import IconCard from '../../components/IconCard'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { CardIcon, DashboardIcon, DeleteIcon, EventIcon, FilesIcon, FolderIcon, GridIcon, HorizontalDots, InvoiceIcon, LabelIcon, ListIcon, MessageIcon, MessageIcon2, NoteIcon, PhoneIcon, PlusIcon, SettingIcon, TeamsIcon, TelegramIcon, UserIcon, WhatsappIcon } from '../../components/Svg'

const Dashboard = () => {
  const [displayGrid, setDisplayGrid] = useState(true)
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="sm:ml-[100px] flex">
        <div className="hide-mobile w-[360px] min-h-[80vh] px-[60px] py-[30px]">
          <div className="flex justify-between">
            <IconCard>
              <UserIcon />
            </IconCard>
            <IconCard>
              <HorizontalDots />
            </IconCard>
          </div>
          <div className='rounded-full border-2 border-border p-[10px] mt-5 h-[130px] w-[130px] mx-auto relative'>
            <img src="./images/avatar1.png" className='rounded-full' alt="" srcset="" />
            <div className="absolute top-11 z-[2] -right-4 bg-primary w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <p className='text-white'>2</p>
            </div>
            <svg className='absolute -top-[2px] -left-[2px]' width="130" height="130" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M66 1C30.1015 1 1 30.1015 1 66C1 101.899 30.1015 131 66 131V131C101.899 131 131 101.899 131 66" stroke="#FF6633" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 className='mt-[30px] mb-[10px] text-center'>Hello Alfred Bryant</h3>
          <span className='text-center block'>adrian.nader@yahoo.com</span>
          <div className='mt-10 rounded-[20px] grid grid-cols-2'>
            {navSections.map((nav, index) => (
              <NavComponent key={index} index={index} nav={nav} />
            ))}
          </div>
          <div className='py-5 px-[31px] rounded-[30px] mt-[100px] border-2 border-border flex justify-between'>
            <PhoneIcon />
            <MessageIcon2 />
            <CardIcon />
            <TelegramIcon />
            <WhatsappIcon />
          </div>
        </div>
        <div className="hide-mobile w-[290px] px-5 pt-[30px]">
          <button className='text-white shadow-orangeShadow bg-primary px-7 py-[15px] w-full rounded-[30px] flex'>
            <InvoiceIcon className="make-white" />
            <p className='text-white mx-auto'>New note</p>
          </button>
          <div className="flex flex-col px-6 py-[30px] gap-y-[22px] bg-dark-80 mt-[15px]">
            {folders.map(folder => (
              <div className="flex items-center">
                <FolderIcon />
                <h3 className='ml-[25px] mr-auto'>{folder.name}</h3>
                <h3>{folder.number}</h3>
              </div>
            ))}
            <div className="flex items-center mt-2">
              <PlusIcon />
              <h3 className='ml-[25px]'>Add Folder</h3>
            </div>
          </div>
          <div className="flex flex-col gap-y-[31px] px-6 mt-16">
            <h3>Labels</h3>
            {labels.map(label => (
              <div className="flex items-center">
                <LabelIcon fill={label.color} />
                <h3 className='ml-[25px]'>{label.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 py-[25px] px-5">
          <div className="flex">
            <div className="flex items-center cursor-pointer px-[15px] border-2 border-border rounded-[100px]">
              <GridIcon fill={displayGrid} onClick={() => setDisplayGrid(true)}/>
              <div className="border-r-2 h-10 mx-3 border-border"></div>
              <ListIcon fill={!displayGrid} onClick={() => setDisplayGrid(false)}/>
            </div>
            <IconCard className="ml-[10px]">
              <DeleteIcon />
            </IconCard>
          </div>
          <div className={`grid sm:grid-cols-2 ${displayGrid && 'grid-cols-2 sm:grid-cols-4'} gap-y-[30px] gap-x-[35px] mt-[45px]`}>
            {[1, 1, 1, 1, 1, 1, 1].map((image, index) => (
              <GridDisplay grid={displayGrid} image={image} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

const NavComponent = ({ nav, index }) => {
  function checkPosition(index) {
    if (index == 0) return 'rounded-tl-[20px]'
    else if (index == 1) return 'rounded-tr-[20px]'
    else if (index == navSections.length - 1) return 'rounded-br-[20px]'
    else if (index == navSections.length - 2) return 'rounded-bl-[20px]'
  }
  const activeClassName = ""
  return <div className={`py-[30px] h-[120px] border border-border flex flex-col items-center gap-y-[26px] ${checkPosition(index)} ${index == 1 && activeClassName}`}>
    {nav.icon}
    <span>{nav.name}</span>
  </div>
}

const navSections = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />
  },
  {
    name: 'Notes',
    icon: <NoteIcon />
  },
  {
    name: 'Invoice',
    icon: <InvoiceIcon />
  },
  {
    name: 'Files',
    icon: <FilesIcon />
  },
  {
    name: 'Events',
    icon: <EventIcon />
  },
  {
    name: 'Teams',
    icon: <TeamsIcon />
  },
  {
    name: 'Message',
    icon: <MessageIcon />
  },
  {
    name: 'Settings',
    icon: <SettingIcon />
  },
]

const folders = [
  {
    name: 'All notes',
    number: 43
  },
  {
    name: 'Code Blocks',
    number: 23
  },
  {
    name: 'Design',
    number: 15
  },
  {
    name: 'Drafts',
    number: 18
  },
  {
    name: 'Peoples Review',
    number: 21
  },
  {
    name: 'Social',
    number: 43
  },
  {
    name: 'Labels',
    number: 36
  },
  {
    name: 'My Notes',
    number: 29
  },
]

const labels = [
  {
    name: 'Notes',
    color: '#33BFFF'
  },
  {
    name: 'Change Notes',
    color: '#FF6633'
  },
  {
    name: 'From Family',
    color: '#29CC39'
  },
  {
    name: 'Imagium',
    color: '#8833FF'
  },
  {
    name: 'Work',
    color: '#33BFFF'
  },
]

const GridDisplay = ({ image, index, grid = true }) => {
  const [selected, setSelected] = useState(false)
  return (
    <div className={`${!grid && 'flex gap-x-6'}`}>
      <div onClick={() => setSelected(!selected)} className={`h-[120px] p-[5px] border-2 border-border rounded-[10px] ${selected && 'border-primary'}`}>
        <img src={`./images/places/Image-${index + 1}.png`} className='cursor-pointer w-full h-full rounded-[10px]' alt="" srcset="" />
      </div>
      <div className={`flex flex-col ${grid && 'items-center'}`}>
        <p onClick={() => setSelected(!selected)} className={`mt-5 mb-[10px] ${selected && 'text-primary'}`}>Shooting Stars</p>
        <span className=''>28.11.2040</span>
      </div>
    </div>
  )
}
