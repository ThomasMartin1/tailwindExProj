import Image from "next/image";
import { teamData } from "./teamData";
import mypic from "../../public/placeholder.png";
import Link from "next/link";

function Team({ team }) {
  return (
    <section id="team" className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the team that made eTournaments possible.
          </p>
        </div>

        <div className="flex flex-wrap -m-2">
          {teamData.map((teamMember) => {
            return (
              <Link key={teamMember} href="/" className="hover:cursor-pointer">
                <div className="p-2 w-full lg:w-1/2 ">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-lg hover:border-blue-500 hover:-translate-y-1 ease-in-out duration-150">
                    <Image
                      width="80"
                      height="80"
                      src={mypic}
                      className="w-16 h-16 bg-gray-100 border p-12 rounded-full"
                    ></Image>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 font-medium p-2">
                        {teamMember.name}
                      </h2>
                      <p className="text-gray-500 p-2">{teamMember.blurb}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          ;
        </div>
      </div>
    </section>
  );
}

export default Team;
