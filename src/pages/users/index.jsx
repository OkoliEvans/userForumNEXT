import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageLayouts from "@/pages/PageLayouts";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const users = [
  { id: 1, name: "Ade Moses", occupation: "Developer", gender: "male" },
  { id: 2, name: "Dera", occupation: "Developer", gender: "female" },
  { id: 3, name: "Adaku", occupation: "trader", gender: "female" },
  { id: 4, name: "Benson Moses", occupation: "Developer", gender: "male" },
  { id: 5, name: "Mosan", occupation: "Developer", gender: "male" },
  { id: 6, name: "Brylon Mex", occupation: "Developer", gender: "male" },
  { id: 7, name: "Nodan", occupation: "Developer", gender: "male" },
];

const Users = () => {
  return (
    <>
      <Head>
        <title>NEXT|AI</title>
        <meta
          name="description"
          content="Connecting IoT with superior algorithm"
        />
        <meta name="viewport" content="width=device-width,scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayouts>
        <div className="">
         <div className="text-3xl text-teal-800 p-2">This is User page.</div> 
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => {
              return (
                <div className="grid grid-cols-4 w-full">
                  <div className=" bg-gray-100 m-4">
                  <Link
                    href={`/users/${user.id}`}
                    className="col-span-1"
                    key={user.id}
                  >
                    <div className="">
                      <span>Name:</span> <span>{user.name}</span>
                    </div>
                    <div>
                      <span>occupation: </span> <span>{user.occupation}</span>
                    </div>
                    <div>
                      <span>Gender: </span> <span>{user.gender}</span>
                    </div>
                  </Link>
                </div>
                </div>
                
              );
            })
          ) : (
            <> DISPLAY NOT FOUND </>
          )}
        </div>
      </PageLayouts>
    </>
  );
};
export default Users;
