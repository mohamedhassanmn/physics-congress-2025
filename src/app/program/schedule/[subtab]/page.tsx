import { client } from "@/sanity/client";
import ScheduleTabs from "@/components/atoms/scheduleTabs";
import Topics from "@/components/molecules/topics";
import Authors from "@/components/molecules/authors";

const PROGRAM_SCHEDULE_QUERY = `*[_type == "sessionSchedule"]|order(date asc){
  _id,
  date,
  sessions[]{
    timeFrom,
    timeTo,
    title,
    chair[]->{
      _id,
      name
    },
    location,
    subSessions[]{
      timeFrom,
      timeTo,
      subSessions[]->{
        _id,
        title,
        presenter->{
          _id,
          name
        },
        authors[]->{
          _id,
          name
        },
        abstract
      }
    }
  }
}`;

const AUTHORS_QUERY = `*[_type == "authorType"]|order(name asc){
  _id,
  name,
  affiliation,
  webpage,
  photo,
  "topics": *[_type == "topicsType" && references(^._id)]{
    _id,
    title
  }
}`

const SchedulePage = async ({
  params,
}: {
  params: Promise<{ subtab: string }>;
}) => {
  const { subtab } = await params;

  let query=null;

  if (subtab === "topics") {
    query= PROGRAM_SCHEDULE_QUERY
  } else if (subtab === "authors") {
    query = AUTHORS_QUERY;
  }

  const data = query && await client.fetch(query);

  return (
    <div className="p-4 bg-white">
      <ScheduleTabs />
      <br />
      <br />
      {subtab == "topics" ? <Topics topicData={data} /> : null}
      {subtab == "authors" ? <Authors authorsData={data} /> : null}
    </div>
  );
};

export default SchedulePage;
