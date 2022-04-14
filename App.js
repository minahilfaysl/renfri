import { StatusBar } from 'expo-status-bar';
import CreateANewListingForm from './app/screens/CreateANewListingForm';

export default function App() {
  return (
    <CreateANewListingForm category='rent' />
  );
}