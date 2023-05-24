import GetTutorials from "../hooks/useGetTutorials";
import TutorialCard from "../components/TutorialCard/TutorialCard";

const Landing = () => {
  const { data } = GetTutorials();

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Hey there!
          </h3>
          <p className="text-gray-600 mt-3">
            Want to become a TypeScript pro? Whether you're a newbie or a
            seasoned developer, we've got lessons for every skill level. Let's
            level up your TypeScript game!
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {data.map((data) => (
              <TutorialCard item={data.attributes} id={data.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Landing;
