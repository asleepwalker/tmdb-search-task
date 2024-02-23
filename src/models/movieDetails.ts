import { IMovie } from './movie';
import { IGenre } from './genre';
import { ILanguage } from './language';
import { ICountry } from './country';
import { ICompany } from './company';
import { IKeyword } from './keyword';
import { IActor } from './actor';
import { IMovieList } from './movieList';

export interface IMovieDetails extends IMovie {
  belongs_to_collection: number | null;
  budget: number;
  credits: {
    cast: IActor[];
  };
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  keywords: {
    keywords: IKeyword[];
  };
  production_companies: ICompany[];
  production_countries: ICountry[];
  recommendations: IMovieList;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
}
