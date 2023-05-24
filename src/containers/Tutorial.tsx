import ReactMarkdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import {
  oneDark,
  oneLight,
  materialDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

export type TutorialData = {
  data: {
    attributes?: {
      Article?: string;
      Description?: string;
      Level?: number;
      Title?: string;
      createdAt?: string;
      publishedAt?: string;
      updatedAt?: string;
    };
    id?: number;
  };
};

const Tutorial = () => {
  const { data: tutorial } = useLoaderData() as TutorialData;

  const renderCodeBlock = ({ children }: { children: string }) => {
    return (
      <SyntaxHighlighter
        language={"typescript"}
        style={oneDark}
        wrapLines={false}
        showInlineLineNumbers
        startingLineNumber={1}
        wrapLongLines
      >
        {children}
      </SyntaxHighlighter>
    );
  };

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {tutorial.attributes?.Title}
          </h1>
          <p className="text-gray-600 mt-3">
            {tutorial.attributes?.Description}
          </p>
        </div>
        <ReactMarkdown
          children={tutorial.attributes?.Article as string}
          components={{
            code: renderCodeBlock,
          }}
        />
      </div>
    </section>
  );
};
export default Tutorial;
