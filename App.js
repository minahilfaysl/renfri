import { StatusBar } from 'expo-status-bar';
import SignUp from './app/screens/SignUp';
import CreateANewListingForm from './app/screens/CreateANewListingForm';
import BottomNavBar from './app/screens/BottomNavBar';

export default function App() {
  return (
    <CreateANewListingForm />
    // <BottomNavBar />
  );
}

