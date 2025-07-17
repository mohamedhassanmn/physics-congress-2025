import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/client";
import ScheduleTabs from "@/components/atoms/scheduleTabs";

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

const SchedulePage = async ({
  params,
}:
  | { params: { subtab: string } }
  | Promise<{ params: { subtab: string } }>) => {
  const resolved = await params;
  const { subtab } = resolved;
  const data = await client.fetch(PROGRAM_SCHEDULE_QUERY);
  const formattedDate = (date: string | number | Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="p-4 bg-white">
      <div className="">
        <ScheduleTabs />
      </div>
      <br />
      <br />
      {subtab == "topics"
        ? data.map(
            (schedule: { sessions: any; date: string | number | Date }) => (
              <details open className="border rounded-md mb-4">
                <summary className="p-4 cursor-pointer bg-primary-500 text-white rounded-md">
                  {formattedDate(schedule?.date)}
                </summary>
                <div className="p-4">
                  <div>
                    {schedule?.sessions?.map((session: any, i: number) => (
                      <div key={i} className="mb-4">
                        <div className="flex items-start border rounded-md p-4 bg-primary-50">
                          <div className="mr-4 font-bold">
                            <div>{session?.timeFrom}</div>
                            <div>{session?.timeTo}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-base mb-2">
                              <PortableText value={session.title} />
                            </div>
                            {session?.chair?.length ? (
                              <div className="flex">
                                <div className="font-semibold">Chair:</div>{" "}
                                &nbsp;
                                <div>
                                  {session?.chair
                                    ?.map((chair: any) => chair?.name)
                                    .join(", ")}
                                </div>
                              </div>
                            ) : null}
                            <div className="flex">
                              <div className="font-semibold">Location:</div>{" "}
                              &nbsp;
                              <div>
                                <PortableText value={session?.location} />
                              </div>
                            </div>
                            <br />
                            <div className="mt-2">
                              {session?.subSessions?.map((subSession: any) => (
                                <div
                                  key={subSession.timeFrom}
                                  className="ml-4 flex"
                                >
                                  <div className="text-md font-semibold mr-4">
                                    {subSession.timeFrom}{" "}
                                    {subSession?.timeTo &&
                                      `- ${subSession.timeTo}`}
                                  </div>
                                  {subSession?.subSessions?.map(
                                    (subSubSession: any) => (
                                      <div key={subSubSession._id}>
                                        <div className="font-semibold">
                                          <PortableText
                                            value={subSubSession.title}
                                          />
                                        </div>
                                        <div className="my-px">
                                          <span className="font-semibold">
                                            Authors:&nbsp;
                                          </span>
                                          <span className="italic">
                                            {subSubSession.authors
                                              .map((author: any) => author.name)
                                              .join(", ")}
                                          </span>
                                        </div>
                                        <div>
                                          <span className="font-semibold">
                                            Presenter:&nbsp;
                                          </span>
                                          <span className="italic">
                                            {subSubSession.presenter.name}
                                          </span>
                                        </div>
                                        <details>
                                          <summary className="cursor-pointer text-primary-500 hover:underline">
                                            View Abstract
                                          </summary>
                                          <div>
                                            <div className="font-semibold my-2">
                                              Abstract:&nbsp;
                                            </div>
                                            <PortableText
                                              value={subSubSession.abstract}
                                            />
                                          </div>
                                        </details>
                                        <br />
                                      </div>
                                    )
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            )
          )
        : null}
    </div>
  );
};

export default SchedulePage;
