import BluePart from "../components/BluePart";
import FinalColorPart from "../components/FinalColorPart";
import FrontPage from "../components/FrontPage";
import Introduction from "../components/Introduction";
import MultiColorPart from "../components/MultiColorPart";
import YellowPart from "../components/YellowPart";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Introduction />
      <YellowPart />
      <BluePart />
      <MultiColorPart />
      <FinalColorPart />
    </>
  );
}
