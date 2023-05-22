import { TutorialAttributes } from "../../hooks/getTutorials";

type TutorialCardProps = {
  key: number;
  item: TutorialAttributes;
};

const TutorialCard = ({ key, item }: TutorialCardProps) => {
  return (
    <li key={key}>
      <div className="w-full h-60 sm:h-52 md:h-56">
        <img
          src={item.Image}
          className="w-full h-full object-cover object-center shadow-md rounded-xl"
          alt=""
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg text-gray-700 font-semibold">{item.Title}</h4>
        <p className="text-indigo-600">{item.Level}</p>
        <p className="text-gray-600 mt-2">{item.Description}</p>
      </div>
    </li>
  );
};

export default TutorialCard;
