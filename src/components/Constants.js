import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon
import PsychologyIcon from '@mui/icons-material/Psychology';    // EAP Icon
import ScheduleIcon from '@mui/icons-material/Schedule';    // Reminders/Breaks Icon
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';  // Daily activities Icon
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';    // Educational resources Icon

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'; // Calories Burned
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // Meditation time
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // Mood

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faHeartPulse, faGlassWater, faDumbbell } from '@fortawesome/free-solid-svg-icons'

export const sidebarList = [
    {name: "Dashboard", link: "/pages/dashboard", icon: <DashboardIcon />},
    {name: "EAP", link: "/pages/eap", icon: <PsychologyIcon />},
    {name: "Set reminders", link: "/pages/set-reminders", icon: <ScheduleIcon />},
    {name: "Daily activities", link: "/pages/daily-activities", icon: <VolunteerActivismIcon />},
    {name: "Educational resources", link: "/pages/educational-resources", icon: <LocalLibraryIcon />},
];

export const statsList = [
    {title: "Steps count", icon: <FontAwesomeIcon icon={faPersonWalking} />, color: "#e23270" },
    {title: "Heart points", icon: <FontAwesomeIcon icon={faHeartPulse} />, color: "#f60d10" },
    {title: "Calories burned", icon: <ElectricBoltIcon />, color: "#f4d247" },
    {title: "Hydration rate", icon: <FontAwesomeIcon icon={faGlassWater} />, color: "#2e88ec" },
    {title: "Exercise duration", icon: <FontAwesomeIcon icon={faDumbbell} />, color: "#652fa1" },
    {title: "Meditation time", icon: <SelfImprovementIcon />, color: "#51ab55" },
    {title: "Mood", icon: <EmojiEmotionsIcon />, color: "#fb8c00" }
]