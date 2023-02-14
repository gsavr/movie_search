import { useEffect, useState } from "react";
import prof1 from "../images/no-pic/profile-1.png";
import prof2 from "../images/no-pic/profile-2.png";
import prof3 from "../images/no-pic/profile-3.png";
import prof4 from "../images/no-pic/profile-4.png";
import prof5 from "../images/no-pic/profile-5.png";
import prof6 from "../images/no-pic/profile-6.png";
import prof7 from "../images/no-pic/profile-7.png";
import prof8 from "../images/no-pic/profile-8.png";
import prof9 from "../images/no-pic/profile-9.png";
import prof10 from "../images/no-pic/profile-10.png";
import prof11 from "../images/no-pic/profile-11.png";
import prof0 from "../images/no-pic/profile-12.png";

const pic = [
  prof0,
  prof1,
  prof2,
  prof3,
  prof4,
  prof5,
  prof6,
  prof7,
  prof8,
  prof9,
  prof10,
  prof11,
];

export const useGenProfilePic = () => {
  const [profilePic, setprofilePic] = useState(prof0);

  useEffect(() => {
    let num = Math.floor(Math.random() * 12);
    setprofilePic(pic[num]);
  }, []);

  return profilePic;
};
