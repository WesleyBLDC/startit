import Hero from "./Hero";
import carousell1 from "../styles/p1_50downsize.png";
import logoPic from "../styles/White_StartIT_full_logo_rect.png"; //"../styles/White_StartIT_full_logo.png";

function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto w-2/3">
        {/* First segment */}
        <div className="my-12">
          <h2 className=" text-center">About Us</h2>
          <p className="text-lg text-center">
            NUS Computing Technopreneurship Society was founded under NUS School
            of Computing by a group of like-minded individuals with a passion
            for technopreneurship. Our student-initiated group aims to serve as
            the key platform for all who are seeking a community of
            action-takers, all members will pursue a side project within the
            year with a team, while learning key skills and technologies in the
            process. Also, members will also have the opportunity to seek
            application of their technical skills with start-ups who have
            micro-projects to offer.
          </p>
        </div>

        {/* Second segment */}
        <div className="my-12">
          <h2 className=" text-center">Our Mission</h2>
          {/* <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <ul>
            <li className="mb-4">
              <h4 className="text-3xl">1.Learning</h4>
              <p>
                To expose members to various fields of tech and entrepreneurship
                to equip them with the necessary knowledge and skills to start
                their journey as a technopreneur.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="text-3xl">2.Sharing</h4>
              <p>
                To nurture our members by providing the ideal environment for
                growth, sharing and idea validation.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="text-3xl">3.Networking</h4>
              <p>
                To create networking opportunities and interactions between
                established entrepreneurs and students.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="text-3xl">4.Doing</h4>
              <p>
                To provide the necessary guidance, infrastructure and community
                for members to embark on their own endeavors, including
                micro-projects, NOC, and their own start-ups.
              </p>
            </li>
          </ul>
        </div>

        {/* <div className="my-12">
          <h2 className=" text-center">Our Vision</h2>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Home;
