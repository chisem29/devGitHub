import {  useDispatch} from 'react-redux';

import type AppDispatch from '../../shared/types/appDispatch';

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch