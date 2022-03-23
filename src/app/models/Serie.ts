import { Genre } from "./Genre";

export interface Serie {
  id: number;
  name: string;
  description : string;
  poster_path:string;
  overview:string;
  genres:Array<Genre>;
  vote_average:string;
  vote_count:string;
}
