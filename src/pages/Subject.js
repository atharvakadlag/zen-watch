import { useParams } from "react-router-dom";
import SubjectModel from "../components/SubjectModel.js";

function Subject() {
  let { name } = useParams();
  return (
    <div>
      <SubjectModel name={name} />
    </div>
  );
}

export default Subject;
