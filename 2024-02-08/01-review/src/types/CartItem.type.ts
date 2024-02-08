import { Lecture } from "./Lecture.type";

export type CartItem = {
  id: string;
  count: number;
  lecture: Lecture;
};
