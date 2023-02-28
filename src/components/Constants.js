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
    { name: "Dashboard", link: "/pages/dashboard", icon: <DashboardIcon /> },
    { name: "EAP", link: "/pages/eap", icon: <PsychologyIcon /> },
    { name: "Set reminders", link: "/pages/set-reminders", icon: <ScheduleIcon /> },
    { name: "Daily activities", link: "/pages/daily-activities", icon: <VolunteerActivismIcon /> },
    { name: "Educational resources", link: "/pages/educational-resources", icon: <LocalLibraryIcon /> },
];

export const statsList = [
    { title: "Steps count", icon: <FontAwesomeIcon icon={faPersonWalking} />, color: "#e23270" },
    { title: "Heart points", icon: <FontAwesomeIcon icon={faHeartPulse} />, color: "#f60d10" },
    { title: "Calories burned", icon: <ElectricBoltIcon />, color: "#f4d247" },
    { title: "Hydration rate", icon: <FontAwesomeIcon icon={faGlassWater} />, color: "#2e88ec" },
    { title: "Exercise duration", icon: <FontAwesomeIcon icon={faDumbbell} />, color: "#652fa1" },
    { title: "Meditation time", icon: <SelfImprovementIcon />, color: "#51ab55" },
    { title: "Mood", icon: <EmojiEmotionsIcon />, color: "#fb8c00" }
]

export const days = [
    { name: "Mon" },
    { name: "Tue" },
    { name: "Wed" },
    { name: "Thu" },
    { name: "Fri" },
    { name: "Sat" }
]

export const blogsList = [
    { title: "Healthy workplaces", description: "Workers’ health, safety and well-being are vital concerns to hundreds of millions of working people worldwide. But the issue extends even further", link: "https://www.who.int/publications/i/item/healthy-workplaces-a-model-for-action" },

    { title: "Productivity in the Workplace", description: "Managers and business owners often wonder how best to improve employee productivity, and for good reason", link: "https://www.meistertask.com/blog/6-easy-ways-to-improve-productivity-in-the-workplace/" },

    { title: "Stress Management", description: "While it may seem like there’s nothing you can do about stress at work and home, there are steps you can take to relieve the pressure and regain control", link: "https://www.helpguide.org/articles/stress/stress-management.htm" },

    { title: "Anxiety", description: "Anxiety affects everyone in different ways. Sometimes, the feelings of fear and dread don’t go away or get worse over time. Here, you can learn about anxiety, who it affects, and how to manage it", link: "https://www.healthline.com/health/anxiety#in-teens" },

    { title: "Work-Life Balance", description: "Work-life balance is typically defined as the amount of time you spend doing your job versus the amount of time you spend with loved ones or pursuing personal interests and hobbies. When work demands more of your time or attention", link: "https://www.coursera.org/articles/work-life-balance" },

    { title: "Depression", description: "Depression is a common illness worldwide, with an estimated 3.8% of the population affected, including 5.0% among adults and 5.7% among adults older than 60 years. Approximately 280 million people in the world have depression. Depression is different from usual mood fluctuations", link: "https://www.who.int/news-room/fact-sheets/detail/depression" },

    { title: "Yoga for Brain", description: "Were you aware that brain power can improve with yoga for brain? Did you know that several asanas help improve brain health?", link: "https://www.healthkart.com/connect/best-asanas-that-support-brain-health/" },

    { title: "Benifits of Breaks", description: "As defined by the dictionary, a break is “an interruption in continuity, a pause in work or during an activity or event”. Breaks allow you to pause and rest so that you can resume", link: "https://blog.noisli.com/10-benefits-of-taking-breaks-and-why-breaks-are-so-important/#:~:text=Breaks%20help%20you%20to%20decompress,to%20prevent%20it%20from%20accumulating." },

    { title: "Ask for Help", description: "Did you know that getting rejected activates the same region in the brain as feeling physical pain? Yes, neuroscience says that rejection hurts", link: "https://pumble.com/blog/ask-for-help-professionally/" },

    { title: "Meditation", description: "When we meditate, we inject far-reaching and long-lasting benefits into our lives: We lower our stress levels, we get to know our pain, we connect better, we improve", link: "https://www.mindful.org/how-to-meditate/" },
]