import Link from "next/link";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";
import { routes } from "@/helper";

export type Keyword = {
  name: string;
  topics: { title: any }[];
};

const Keywords = ({ keywordsData }: { keywordsData?: Keyword[] }) => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const safeKeywords = Array.isArray(keywordsData) ? keywordsData : [];

  const grouped = alphabets.map((letter) => ({
    letter,
    keywords: safeKeywords
      .filter((k) => k.name && k.name[0]?.toUpperCase() === letter)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  const getSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex flex-wrap gap-2 mb-6">
        {alphabets.map((letter) => (
          <Link
            key={letter}
            href={`#keyword-${letter}`}
            className="px-2 py-1 rounded text-primary-500 hover:bg-primary-80 font-semibold text-sm border border-primary-200"
          >
            {letter}
          </Link>
        ))}
      </div>
      <div className="bg-white rounded shadow p-4">
        {grouped.map(({ letter, keywords }) =>
          keywords.length > 0 ? (
            <div key={letter} id={`keyword-${letter}`} className="mb-6">
              <div className="text-lg font-bold text-primary-600 mb-2 border-b border-primary-100 pb-1">
                {letter}
              </div>
              <ul>
                {keywords.map((keywordObj) => (
                  <li
                    key={keywordObj.name}
                    className="flex flex-col py-1 border-b last:border-b-0"
                  >
                    <span className="font-medium text-primary-700 capitalize">
                      {keywordObj.name}
                    </span>
                    {keywordObj.topics && keywordObj.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {keywordObj.topics.map((topic, idx) => {
                          let topicText = "";
                          if (typeof topic.title === "string")
                            topicText = topic.title;
                          else if (Array.isArray(topic.title))
                            topicText = topic.title
                              .map((block: any) =>
                                block.children?.map((c: any) => c.text).join("")
                              )
                              .join(" ");
                          else topicText = "";
                          const href = `${routes.topics}#${getSlug(topicText)}`;
                          return (
                            <Link
                              key={idx}
                              href={href}
                              className="bg-primary-50 text-primary-600 text-xs px-2 py-0.5 hover:underline hover:text-primary-800 transition"
                            >
                              <PortableText
                                value={topic.title}
                                components={portableTextComponents}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Keywords;
