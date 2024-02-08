import Image from "next/image";
import Link from "next/link";

interface LectureCardProps {
  lecture: {
    id: string;
    title: string;
    url: string;
  };
}

function LectureCard({ lecture }: LectureCardProps) {
  return (
    <Link href={`/lectures/${lecture.id}`} className="flex flex-col">
      <div className="relative w-full aspect-video">
        <Image
          src={lecture.url}
          alt={lecture.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <h6>{lecture.title}</h6>
    </Link>
  );
}

export default LectureCard;
