import Page from "../components/Page";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/groups");
  }

  return (
    <Page>
      <button 
        type="button" 
        onClick={onButtonClick}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Get Started!
      </button>
    </Page>
  );
}