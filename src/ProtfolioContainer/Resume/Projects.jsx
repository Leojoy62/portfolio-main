import { useState } from "react";
import Details from "./Details";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [projectNum, setProjectNum] = useState(1);

  const toggleModal = (value = true) => {
    setIsOpen(value);
  };

  const toggleProjectNum = (val) => {
    setProjectNum(val);
  };

  return (
    <div data-aos="fade-up">
      {isOpen && (
        <Details
          toggleModal={toggleModal}
          data={
            projectNum === 1 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold ">YourChef:</span>{" "}
                  A full-stack restaurant management application. <br />
                  <span className="text-orange-600 font-bold">
                    Front-end:
                  </span>{" "}
                  React.js, Axios, React Router, Tanstack Query, Firebase,
                  Tailwind CSS. <br />
                  <span className="text-orange-600 font-bold">
                    Back-end:
                  </span>{" "}
                  Node.js, Express.js, MongoDB, JWT. <br />
                  <span className="text-orange-600 font-bold">
                    Payment Integration:
                  </span>{" "}
                  Stripe <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  <br />
                  - I created a user-friendly interface for customers to easily
                  check menus, order, and book reservations, making their
                  experience better. <br />
                  - Also, I added Stripe for safe online payments and used Tan
                  Stack Query to get data faster. <br />- Plus, set up Firebase
                  for managing user logins.
                </p>
              </div>
            ) : projectNum === 2 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold">ChatCave:</span> A
                  real-time chatting application. <br />
                  <span className="text-orange-600 font-bold">
                    Front-end:
                  </span>{" "}
                  React.js, Axios, React Router,Zustand, Socket.io client,
                  React-hot-toast, react-icons, Tailwind CSS. <br />
                  <span className="text-orange-600 font-bold">
                    Back-end:
                  </span>{" "}
                  Node.js, Express.js, Mongoose, JWT,Socket.io. Bcrypt,
                  Cookie-Parser,dotenv. <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  - I have ensured instant communication with Socket.IO,
                  fortified security using JWT for user authentication, and
                  enhanced password safety with bcrypt. <br />
                  - Data management is streamlined with Mongoose, while cookies
                  are efficiently handled through Cookie-Parser. <br />-
                  Additionally, I have implemented React-hot-toast for
                  convenient toast notifications and employed Zustand for
                  seamless state management. <br />
                  <span className="text-red-600">
                    N.B: For live preview, it may take a lil bit more loading
                    time as it is hosted for free on Render.
                  </span>
                </p>
              </div>
            ) : projectNum === 3 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold">CarFixer:</span>{" "}
                  Schedule car servicing appointments and purchase parts online.{" "}
                  <br />
                  <span className="text-orange-600 font-bold">
                    Front-end:
                  </span>{" "}
                  Developed using React.js, React Router, and Firebase. <br />
                  <span className="text-orange-600 font-bold">
                    Back-end:
                  </span>{" "}
                  Built with Node.js, Express.js, JWT, and MongoDB. <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  <br />
                  - Effortlessly search and filter services by price, quick
                  order placement. <br />
                  - Secure authentication with JWT. <br />- Seamless integration
                  of Firebase for real-time updates, intuitive user interface
                  for enhanced user experience.
                </p>
              </div>
            ) : projectNum === 4 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold">Miro:</span> A
                  front-end project (Task). <br />
                  <span className="text-orange-600 font-bold">
                    Technologies Used:
                  </span>{" "}
                  <br />
                  Leveraged React for interactive UI design, incorporated CSS3
                  for styling, utilized Tailwind CSS for responsive layouts, and
                  integrated DaisyUI for an interactive and responsive
                  navigation bar. <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  <br />
                  - Ensured a seamless user experience across various devices
                  with responsive design principles. <br />- Enabling effortless
                  task management and navigation.
                </p>
              </div>
            ) : null
          }
        />
      )}
      <div className="md:flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div>
            <h5 className="text-xl text-orange-600 font-bold">YourChef</h5>

            <p className="text-lg font-semibold">
              A Full Stack Online Restaurant App
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2 mt-5 md:mt-0 lg:mt-0">
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(1);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Details
          </button>

          <a
            href="https://your-chef-74f95.web.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href="https://github.com/Leojoy62/YourChef"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="md:flex justify-between items-center my-5">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div className="mr-8 md:mr-0 lg:mr-0">
            <h5 className="text-xl text-orange-600 font-bold">ChatCave</h5>

            <p className="text-lg font-semibold">
              A real-time chatting application
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 mt-5 md:mt-0 lg:mt-0">
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(2);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Details
          </button>
          <a
            href="https://chat-cave.onrender.com/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href="https://github.com/Leojoy62/Chat-Cave"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="md:flex justify-between items-center my-5">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div className="mr-8 md:mr-0 lg:mr-0">
            <h5 className="text-xl text-orange-600 font-bold">CarFixer</h5>

            <p className="text-lg font-semibold">
              A Full Stack Car servicing App
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 mt-5 md:mt-0 lg:mt-0">
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(3);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Details
          </button>
          <a
            href="https://genius-car-96391.web.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href="https://github.com/Leojoy62/CarFixer"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="md:flex justify-between items-center my-5">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div className="mr-20 md:mr-0 lg:mr-0">
            <h5 className="text-xl text-orange-600 font-bold">Miro</h5>

            <p className="text-lg font-semibold">A Front-end Task Project</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 mt-5 md:mt-0 lg:mt-0">
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(4);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Details
          </button>
          <a
            href="https://miro-lemon.vercel.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href="https://github.com/Leojoy62/miro"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
