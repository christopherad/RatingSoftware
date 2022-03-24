import { Genre } from "./Genre";

export interface Item {
  id: number;
  title: string;
  description : string;
  poster_path:string;
  overview:string;
  genres:Array<Genre>;
  vote_average:string;
  vote_count:string;
  name:string
  //
}
