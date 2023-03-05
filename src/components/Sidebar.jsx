import IconCard from "./IconCard";
import { BuildingIcon, ChartIcon, MessengerIcon, NavigationIcon, StarIcon, WebIcon } from "./Svg";

const Sidebar = () => {
    return (
        <div className="hide-mobile w-[100px] h-screen fixed left-0 border-r-2 pt-[30px] border-border/5 flex flex-col bg-dark-80">
            <div className="flex flex-col gap-y-5 items-center">
                {routes.map(route => (
                    <IconCard>
                        {route.icon}
                    </IconCard>
                ))}
            </div>
        </div>
    )
}

export default Sidebar

const routes = [
    {
        url: '/dashboard',
        icon: <NavigationIcon />
    },
    {
        url: '/dashboard/favorite',
        icon: <StarIcon />
    },
    {
        url: '/dashboard/messages',
        icon: <MessengerIcon />
    },
    {
        url: '/dashboard/chart',
        icon: <ChartIcon />
    },
    {
        url: '/notifications',
        icon: <WebIcon />
    },
    {
        url: '/dashboard/leaderboard',
        icon: <BuildingIcon />
    }
]