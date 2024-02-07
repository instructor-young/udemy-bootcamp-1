import Link from "next/link";
import { PropsWithChildren } from "react";

type Til = {
  id: string;
  title: string;
  content: string;
};

interface TilCardProps {
  til: Til;
}

function TilCard({ til }: PropsWithChildren<TilCardProps>) {
  return (
    <Link href={`/tils/${til.id}`} className="block">
      <div className="border p-5 rounded-md flex flex-col gap-y-4">
        <h6 className="text-lg font-bold">{til.title}</h6>
        <p className="text-sm">{til.content.slice(0, 20)}...</p>
      </div>
    </Link>
  );
}

export default TilCard;
