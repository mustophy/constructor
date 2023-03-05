import { Link } from "react-router-dom"
import IconCard from "./IconCard"
import { ArrowRight, BellIcon, CancelIcon, DashboardIcon, EventIcon, FilesIcon, HorizontalDots, InvoiceIcon, MenuIcon, MessageIcon, NoteIcon, ProfileIcon, SearchIcon, SettingIcon, TeamsIcon } from "./Svg"

const Navbar = () => {
    const showSidebar = () => {
        const mobileNav = document.getElementById("mobile-nav")
        mobileNav.classList.add('slide-in')
    }
    const hideNav = () => {
        const mobileNav = document.getElementById("mobile-nav")
        mobileNav.classList.remove('slide-in')
    }
    return (
        <div className="h-[100px] z-10 sticky top-0 p-[25px] bg-background flex items-center border-b border-border">
            <IconCard onClick={() => showSidebar()}>
                <MenuIcon className="cursor-pointer" onc />
            </IconCard>
            <MobileSidebar hide={() => hideNav()}/>
            <Link>
                <h2>Constructor</h2>
            </Link>
            <ul className="hide-mobile sm:flex items-center gap-x-[25px] mx-20">
                {routes.map(route => (
                    <Link to={route.url}>
                        <li className="text-[13px] font-[700] text-gray-blue-200">{route.name}</li>
                    </Link>
                ))}
                <li>
                    <HorizontalDots />
                </li>
            </ul>
            <SearchInput placeholder="Search Transactions and Documents" />
            <div className="hide-mobile sm:flex gap-x-[15px] items-center ml-auto">
                <ProfileIcon />
                <h3 className="mr-[15px]">Clayton Santos</h3>
                <IconCard>
                    <BellIcon />
                </IconCard>
                <IconCard>
                    <CancelIcon />
                </IconCard>
            </div>
            <IconCard className="ml-auto sm:hidden">
                <ProfileIcon />
            </IconCard>
        </div>
    )
}

export default Navbar

const SearchInput = ({ placeholder }) => (
    <div className="hide-mobile relative shadow-boxShadow1">
        <SearchIcon className="absolute top-4 left-[26px]" />
        <ArrowRight className="absolute top-4 right-[26px]" />
        <input placeholder={placeholder} type="text" className="bg-white shadow-boxShadow1 block rounded-[30px] py-4 px-[60px] w-[330px] h-[50px] placeholder:text-[12px] placeholder:leading-[20px] placeholder:text-gray-blue-100" />
    </div>
)

const MobileSidebar = ({hide}) => (
    <div className="h-screen fixed sm:hidden shadow-2xl top-0 left-0 w-[60vw] flex flex-col gap-y-10 pl-10 transition-all duration-700 bg-white z-30 translate-x-[-250%]" id="mobile-nav">
        <h3 onClick={hide} className="mt-20 text-2xl font-[500] -tracking-widest">X</h3>
        <div className="flex gap-x-4 items-center mt-20">
            <div className="w-5">
                <DashboardIcon />
            </div>
            <p>Dashboard</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <NoteIcon />
            </div>
            <p>Notes</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <InvoiceIcon />
            </div>
            <p>Invoice</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <FilesIcon />
            </div>
            <p>Files</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <EventIcon />
            </div>
            <p>Events</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <TeamsIcon />
            </div>
            <p>Teams</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <MessageIcon />
            </div>
            <p>Message</p>
        </div>
        <div className="flex gap-x-4 items-center">
            <div className="w-5">
                <SettingIcon />
            </div>
            <p>Settings</p>
        </div>
    </div>
)

const routes = [
    {
        name: 'Dashboard',
        url: '/dashboard'
    },
    {
        name: 'About Us',
        url: '/about-us'
    },
    {
        name: 'News',
        url: '/news'
    },
    {
        name: 'User Policy',
        url: '/user-policy'
    },
    {
        name: 'Contacts',
        url: '/contacts'
    },
]