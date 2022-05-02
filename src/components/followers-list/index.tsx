import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { User, UserResponse } from "../../interface";
import Image from "next/image";

export const FollowersList = () => {
  const [followers, setFollowers] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get<
        any,
        AxiosResponse<UserResponse, any>,
        any
      >("https://randomuser.me/api/?results=5");
      setFollowers(data.results);
    };

    fetchFollowers();
  }, []);

  return (
    <div className="container mx-auto mt-8 rounded-sm p-4 shadow-sm h-[50vh] overflow-auto flex flex-col justify-between">
      <div>
        {followers &&
          followers.map((follower, index) => (
            <div
              key={index}
              className="flex px-4 py-0 border-b-2 border-slate-400"
              data-testid={`follower-item-${index}`}
            >
              <Image
                className="rounded-full"
                width={64}
                height={64}
                layout="fixed"
                src={follower.picture.large}
                alt={follower.name.first + " " + follower.name.last}
              />
              <div className="ml-5">
                <div className="mr-2">
                  <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                </div>
                <p>{follower.login.username}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
};
