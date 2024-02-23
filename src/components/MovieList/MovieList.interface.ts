import { IMovie } from '../../models/movie';

export interface MovieListProps {
  items: IMovie[];
  onClick: (id: number) => void;
}
