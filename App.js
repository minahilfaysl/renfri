import { StatusBar } from 'expo-status-bar';
import SignUp from './app/screens/SignUp';
import CreateANewListingForm from './app/screens/CreateANewListingForm';
import SearchBottomNavBar from './app/screens/navbar/SearchBottomNavBar';
import ProfileBottomNavBar from './app/screens/navbar/ProfileBottomNavBar';
import NotifsBottomNavBar from './app/screens/navbar/NotifsBottomNavBar';
import ChatBottomNavBar from './app/screens/navbar/ChatBottomNavBar';

export default function App() {
  return (
    // <CreateANewListingForm />
    // <ProfileBottomNavBar />
    // <NotifsBottomNavBar />
    <ChatBottomNavBar />
  );
}