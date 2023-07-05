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
  original_title: string | null | undefined;
  overview: string | null | undefined;
  poster_path: string | null | undefined;
  release_date: string | null | undefined;
  isWatched: boolean | null | undefined;
  // isSearch?: boolean;
}
