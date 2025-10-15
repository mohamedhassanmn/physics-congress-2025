import { baseUrl } from '@/helper';
import ScheduleTabs from "@/components/atoms/scheduleTabs";
import Topics from "@/components/molecules/topics";
import Authors from "@/components/molecules/authors";
import Keywords from "@/components/molecules/keywords";

const SchedulePage = async ({
  params,
}: {
  params: Promise<{ subtab: string }>;
}) => {
  const { subtab } = await params;

  const data = await fetch(baseUrl+`/api/program/schedule?type=${subtab}`).then(r => r.json());
  return (
    <div className="p-4 bg-white">
      <ScheduleTabs />
      <br />
      <br />
      {subtab == "topics" ? <Topics topicData={data} /> : null}
      {subtab == "authors" ? <Authors authorsData={data} /> : null}
      {subtab == "keywords" ? <Keywords keywordsData={data} /> : null}
    </div>
  );
};

export default SchedulePage;
