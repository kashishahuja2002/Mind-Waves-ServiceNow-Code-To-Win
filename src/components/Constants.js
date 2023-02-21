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
    {name: "Reminders / Breaks", link: "/pages/reminders-breaks", icon: <ScheduleIcon />},
    {name: "Daily activities", link: "/pages/daily-activities", icon: <VolunteerActivismIcon />},
    {name: "Educational resources", link: "/pages/educational-resources", icon: <LocalLibraryIcon />},
];

export const statsList = [
    {title: "Steps count", icon: <FontAwesomeIcon icon={faPersonWalking} />, color: "#2e88ec" },
    {title: "Heart points", icon: <FontAwesomeIcon icon={faHeartPulse} />, color: "#51ab55" },
    {title: "Calories burned", icon: <ElectricBoltIcon />, color: "#333338" },
    {title: "Hydration rate", icon: <FontAwesomeIcon icon={faGlassWater} />, color: "#e23270" },
    {title: "Exercise duration", icon: <FontAwesomeIcon icon={faDumbbell} />, color: "#f44335" },
    {title: "Meditation time", icon: <SelfImprovementIcon />, color: "#652fa1" },
    {title: "Mood", icon: <EmojiEmotionsIcon />, color: "#fb8c00" }
]