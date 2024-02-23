import useApi from './useApi';
import { IMovieDetails } from '../models/movieDetails';

const useDetailsApi = (id: number): [IMovieDetails | undefined, boolean, boolean] =>
  useApi<IMovieDetails>(`/movie/${id}?language=en-US&append_to_response=recommendations,credits,keywords`);

export default useDetailsApi;
