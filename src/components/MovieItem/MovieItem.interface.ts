import { IMovie } from '../../models/movie';

export interface MovieItemProps {
  data: IMovie;
  onClick: () => void;
}
