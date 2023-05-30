import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type RootState from '../../shared/types/rootState';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector