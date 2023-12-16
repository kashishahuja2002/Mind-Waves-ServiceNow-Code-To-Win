// Sidebar Icons
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon
import PsychologyIcon from '@mui/icons-material/Psychology';    // EAP Icon
// import ScheduleIcon from '@mui/icons-material/Schedule';    // Reminders/Breaks Icon
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';  // Daily activities Icon
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';    // Educational resources Icon
import ExtensionIcon from '@mui/icons-material/Extension';      // Relaxing Activities

// Stat List Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faHeartPulse, faGlassWater, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'; // Calories Burned
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // Meditation time
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // Mood

// Badges
import StepsCountBadge from '../assets/images/badges/StepsCountBadge.png';
import HeartPointsBadge from '../assets/images/badges/HeartPointsBadge.png';
import CaloriesBurnedBadge from '../assets/images/badges/CaloriesBurnedBadge.png';
import HydrationRateBadge from '../assets/images/badges/HydrationRateBadge.png';
import ExerciseDurationBadge from '../assets/images/badges/ExerciseDurationBadge.png';
import MeditationTimeBadge from '../assets/images/badges/MeditationTimeBadge.png';
import MoodBadge from '../assets/images/badges/MoodBadge.png';

// Relaxing Activities
import Music from '../assets/images/relaxing-activities/Music.jpg';
import Reading from '../assets/images/relaxing-activities/Reading.jpg';
import Videos from '../assets/images/relaxing-activities/Videos.jpg';
import Memes from '../assets/images/relaxing-activities/Memes.webp';
import Exercise from '../assets/images/relaxing-activities/Exercise.webp';
import Meditation from '../assets/images/relaxing-activities/Meditation.jpg';
import AudioBooks from '../assets/images/relaxing-activities/AudioBooks.jpg';
import Games from '../assets/images/relaxing-activities/Games.webp';

export const sidebarList = [
    { name: "Dashboard", link: "/pages/dashboard", icon: <DashboardIcon /> },
    { name: "EAP", link: "/pages/eap", icon: <PsychologyIcon /> },
    // { name: "Set reminders", link: "/pages/set-reminders", icon: <ScheduleIcon /> },
    { name: "Daily activities", link: "/pages/daily-activities", icon: <VolunteerActivismIcon /> },
    { name: "Relaxing Activities", link: "/pages/relaxing-activities", icon: <ExtensionIcon /> },
    { name: "Educational resources", link: "/pages/educational-resources", icon: <LocalLibraryIcon /> },
];

export const statsList = [
    { key: "stepsCount", title: "Steps Count", icon: <FontAwesomeIcon icon={faPersonWalking} />, color: "#e23270" },
    { key: "heartPoints", title: "Heart Points", icon: <FontAwesomeIcon icon={faHeartPulse} />, color: "#f60d10" },
    { key: "caloriesBurned", title: "Calories loss", icon: <ElectricBoltIcon />, color: "#f4d247" },
    { key: "hydrationRate", title: "Hydration", icon: <FontAwesomeIcon icon={faGlassWater} />, color: "#2e88ec" },
    { key: "exerciseDuration", title: "Exercise", icon: <FontAwesomeIcon icon={faDumbbell} />, color: "#652fa1" },
    { key: "meditationTime", title: "Meditation", icon: <SelfImprovementIcon />, color: "#51ab55" },
    { key: "mood", title: "Mood", icon: <EmojiEmotionsIcon />, color: "#fb8c00" }
];

export const days = [
    { id: 1, name: "Mon" },
    { id: 2, name: "Tue" },
    { id: 3, name: "Wed" },
    { id: 4, name: "Thu" },
    { id: 5, name: "Fri" },
    { id: 6, name: "Sat" },
    { id: 0, name: "Sun" },
];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
];

export const badgesList = [
    { key: "stepsBadge", badge: StepsCountBadge, goal: "150000 steps" },
    { key: "heartBadge", badge: HeartPointsBadge, goal: "450 points" },
    { key: "caloriesBadge", badge: CaloriesBurnedBadge, goal: "60000 calories" },
    { key: "waterBadge", badge: HydrationRateBadge, goal: "240 glasses" },
    { key: "exerciseBadge", badge: ExerciseDurationBadge, goal: "108000 sec" },
    { key: "meditationBadge", badge: MeditationTimeBadge, goal: "27000 sec" },
    { key: "moodBadge", badge: MoodBadge, goal: "15 days" }
];

export const relaxingActivitiesList = [
    { key: "music", title: "Music", content: "Let the music move you: Feel the rhythm and experience the transformative power of music.", image: Music, link: "https://open.spotify.com/" },
    { key: "reading", title: "Reading", content: "Take a break from reality and Let your imagination soar : Dive into a good read and unlock a world of possibilities.", image: Reading, link: "https://www.wattpad.com/" },
    { key: "video", title: "Clips & Videos", content: "Unwind and relax: Treat yourself to some peaceful and calming videos that will soothe your mind and body.", image: Videos, link: "https://www.youtube.com/" },
    { key: "memes", title: "Memes", content: "Laugh your way to a better mood: Watch some memes and forget your worries for a while.", image: Memes, link: "https://www.instagram.com/explore/" },
    { key: "exercise", title: "Exercise", content: "Your body will thank you: Take the first step towards a healthier, happier you by prioritizing exercise.", image: Exercise, link: "/#/pages/daily-activities" },
    { key: "meditation", title: "Meditation", content: "Escape into serenity: Find tranquility in the midst of chaos and enjoy the calming effects of meditation.", image: Meditation, link: "/#/pages/daily-activities" },
    { key: "audioBooks", title: "Audio Books", content: "Unlock a world of knowledge - listen to your favorite stories with audiobooks.", image: AudioBooks, link: "https://www.audible.in/" },
    { key: "games", title: "Games", content: "Step into the world of endless adventures and exhilarating challenges with our exciting collection of games! Are you ready to unleash your inner gamer?", image: Games, link: "https://www.crazygames.com/" },
];

export const questionsList = [
    {id: 1, question: "How are you feeling today?", opt1: "Bad", opt2: "Okay", opt3: "Good"},
    {id: 2, question: "How would you describe your energy levels right now?", opt1: "Low", opt2: "Moderate", opt3: "High"},
    {id: 3, question: "Are you feeling stressed or anxious right now?", opt1: "Yes, very much", opt2: "A little bit", opt3: "Not at all"},
    {id: 4, question: "How would you describe your current motivation levels?", opt1: "Low", opt2: "Moderate", opt3: "High"},
    {id: 5, question: "Are you feeling overwhelmed with work or other responsibilities?", opt1: "Yes, very much", opt2: "A little bit", opt3: "Not at all"},
    {id: 6, question: "Are you feeling lonely or isolated?", opt1: "Yes, very much", opt2: "A little bit", opt3: "Not at all"},
    {id: 7, question: "Are you feeling optimistic about the future?", opt1: "Not at all", opt2: "A little bit", opt3: "Yes, very much"},
    {id: 8, question: "Are you feeling confident in your abilities?", opt1: "Not at all", opt2: "A little bit", opt3: "Yes, very much"},
    {id: 9, question: "Are you feeling connected to others around you?", opt1: "Not at all", opt2: "A little bit", opt3: "Yes, very much"},
    {id: 10, question: "How would you describe your overall mood right now?", opt1: "Negative", opt2: "Neutral", opt3: "Positive"},
    {id: 11, question: "Are you feeling grateful for anything in particular today?", opt1: "Not really", opt2: "A little bit", opt3: "Yes"},
    {id: 12, question: "Are you feeling any physical discomfort or pain right now?", opt1: "Yes, a lot", opt2: "A little bit", opt3: "None at all"},
    {id: 13, question: "Are you feeling any sense of accomplishment or satisfaction right now?", opt1: "Not at all", opt2: "A little bit", opt3: "Yes, very much"},
    {id: 14, question: "Are you feeling any sense of hope or optimism for the future?", opt1: "Not at all", opt2: "A little bit", opt3: "Yes, very much"},
];

export const googleFitUrl = {
    stepsCount: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
    heartPoints: "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes",
    caloriesBurned: "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
}