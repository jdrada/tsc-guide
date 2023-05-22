import axios from "axios";

const Tutorial = () => {
  const getTutorial = async () => {
    try {
      const response = await axios.get(
        " http://localhost:1337/api/tutorials/1"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getTutorial();

  return <div>Tutorial</div>;
};

export default Tutorial;
