import ReactMarkdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import {
  oneDark,
  oneLight,
  materialDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeComponent } from "react-markdown/lib/ast-to-react";

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
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <ReactMarkdown
          children={tutorial.attributes?.Article as string}
          components={{
            code: renderCodeBlock as CodeComponent,
          }}
        />
      </div>
    </section>
  );
};
export default Tutorial;
