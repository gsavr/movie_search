export interface MovieSearchState {
  moviesNowPlaying: [];
  moviesTrending: [];
  moviesByGenre: [];
  moviesAction: [];
  moviesAnimation: [];
  moviesComedy: [];
  moviesDrama: [];
  moviesFantasy: [];
  moviesHorror: [];
  moviesRomance: [];
  moviesSciFi: [];
  moviesSearch: [];
  movie: {
    id: string;
    genres: [{ name: string }];
    homepage: string;
    poster_path: string;
    original_title: string;
    overview: string;
    release_date: string;
    runtime: number;
    vote_average: number;
  };
  cast: [
    {
      id: number;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }
  ];
  actor: {
    biography: string;
    birthday: string;
    deathday: string | null;
    homepage: string;
    id: number;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
  };
  recommendations: [];
  moviesWithActor: [];
  status: "idle" | "loading" | "failed";
}
