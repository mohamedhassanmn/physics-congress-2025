
import { PortableText } from "@portabletext/react";
import { formattedDate } from "@/helper/utils";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')          
    .replace(/[^\w\-]+/g, '')   
    .replace(/\-\-+/g, '-')     
    .replace(/^-+/, '')         
    .replace(/-+$/, '');        
}

const Topics = ({ topicData = [] }) => {
  return (
    <>
      {topicData.map(
        (schedule: { sessions: any; date: string | number | Date }) => (
          <details open className="border rounded-md mb-4">
            <summary className="p-4 cursor-pointer bg-secondary text-white rounded-md">
              {formattedDate(schedule?.date)}
            </summary>
            <div className="p-4">
              <div>
                {schedule?.sessions?.map((session: any, i: number) => {
                  let sessionTitle = '';
                  if (Array.isArray(session?.title)) {
                    sessionTitle = session.title.map((block: any) => block.children?.map((c: any) => c.text).join('')).join(' ');
                  } else if (typeof session?.title === 'string') {
                    sessionTitle = session.title;
                  } else {
                    sessionTitle = `topic-${i}`;
                  }
                  return (
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
                              <div className="font-semibold">Chair:</div> &nbsp;
                              <div>
                                {session?.chair
                                  ?.map((chair: any) => chair?.name)
                                  .join(", ")}
                              </div>
                            </div>
                          ) : null}
                          <div className="flex">
                            <div className="font-semibold">Location:</div> &nbsp;
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
                                  {subSession?.timeTo && `- ${subSession.timeTo}`}
                                </div>
                                {subSession?.subSessions?.map((subSubSession: any) => {
                                  let subTitle = '';
                                  if (Array.isArray(subSubSession?.title)) {
                                    subTitle = subSubSession.title.map((block: any) => block.children?.map((c: any) => c.text).join('')).join(' ');
                                  } else if (typeof subSubSession?.title === 'string') {
                                    subTitle = subSubSession.title;
                                  } else {
                                    subTitle = subSubSession._id || '';
                                  }
                                  const subAnchorId = slugify(subTitle);
                                  return (
                                    <div key={subSubSession._id}>
                                      <div id={subAnchorId} className="font-semibold">
                                        <PortableText value={subSubSession.title} />
                                      </div>
                                      <div className="my-px">
                                        <span className="font-semibold">Authors:&nbsp;</span>
                                        <span className="italic font-medium">
                                          {subSubSession.authors?.map((author: any) => author.name).join(", ")}
                                        </span>
                                      </div>
                                      <div>
                                        <span className="font-semibold">Presenter:&nbsp;</span>
                                        <span className="italic font-medium">{subSubSession.presenter?.name}</span>
                                      </div>
                                      <details>
                                        <summary className="cursor-pointer text-secondary hover:underline">View Abstract</summary>
                                        <div>
                                          <div className="font-semibold my-2">Abstract:&nbsp;</div>
                                          <PortableText value={subSubSession.abstract} />
                                        </div>
                                      </details>
                                      <br />
                                    </div>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </details>
        )
      )}
    </>
  );
};

export default Topics;
