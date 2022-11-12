import { useDispatch as _useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store/store';


const useDispatch = () => _useDispatch<AppDispatch>();

export default useDispatch;