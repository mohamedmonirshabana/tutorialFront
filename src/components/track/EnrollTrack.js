import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EnrollTrack = () => {
  const token = localStorage.getItem("token");
  // let navigate = useNavigate();
  const params = useParams();
  const { trackid } = params;
  const enroll = async () => {
    const response = await fetch(
      `http://localhost:8000/track/enroll/${trackid}`,
      {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    enroll();
  }, []);
};

export default EnrollTrack;
