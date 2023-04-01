import React from "react";
import { MdDelete } from "react-icons/md";
import NotFound from "./NotFound";
const Favorites = ({ addToFav, favorite }) => {
  console.log("fav", favorite);
  return (
    <>
      {!!favorite.length ? (
        <div>
          {favorite.map((person) => (
            <div key={person.id}>
              <div className="border mx-4 text-white w-52 h-52 rounded bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-4  gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.img}
                  alt=""
                />
                <div>
                  <h3 className="text-base text-white font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name} {person.lastname}
                  </h3>
                  <p>
                    phone:{" "}
                    <span className="text-sm font-semibold leading-6 text-black">
                      {person.role}
                    </span>
                  </p>
                  <p>
                    phone:{" "}
                    <span className="text-sm font-semibold leading-6 text-black">
                      {person.phone}
                    </span>
                  </p>
                </div>

                <div>
                  <span
                    onClick={() => addToFav(person)}
                    className="hover:text-orange-600 focus:outline-none  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
                  >
                    <MdDelete fontSize={20} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Favorites;
