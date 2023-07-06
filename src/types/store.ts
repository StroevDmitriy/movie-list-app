export interface IState {
  movies: IMovie[];
  activeTab: number;
}

export interface ISearchState {
  movies: IMovie[];
  loader: boolean;
}

export interface IMovie {
  id: number;
  original_title: string | undefined;
  overview: string | undefined;
  poster_path: string | undefined;
  release_date: string | undefined;
  isWatched: boolean | undefined;
}
