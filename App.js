import { StatusBar } from 'expo-status-bar';
import CreateANewListingForm from './app/screens/forms/CreateANewListingRent';

export default function App() {
  return (
    <CreateANewListingForm category='rent' />
  );
}