import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './components/firebase/firebaseApp';

configure({ adapter: new Adapter() });
