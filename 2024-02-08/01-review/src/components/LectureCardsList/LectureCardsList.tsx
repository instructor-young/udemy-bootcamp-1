import { ComponentProps } from "react";
import LectureCard from "../LectureCard";

interface LectureCardsListProps {
  title: string;
  lectures: Array<ComponentProps<typeof LectureCard>["lecture"]>;
}

function LectureCardsList({ title, lectures }: LectureCardsListProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      <ol className="grid grid-cols-4 gap-x-5 gap-y-7">
        {lectures.map((lecture) => (
          <li key={lecture.id}>
            <LectureCard lecture={lecture} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default LectureCardsList;
