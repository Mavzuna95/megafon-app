/* eslint-disable jsx-a11y/no-redundant-roles */
import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
export default function Contact({ newUsers, setNewUsers, addToFav, favorite }) {
  const onUserDelete = (id) => {
    setNewUsers(
      newUsers.filter((user) => {
        return user.id !== id;
      })
    );
    fetch(`http://localhost:3003/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    alert("Пользователь удален!");
  };

  return (
    <div className="bg-white py-4 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Познакомьтесь наши пользователи
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {newUsers.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.img}
                  alt=""
                />
                <div>
                  <h2 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name} {person.lastname}
                  </h2>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>

                <div>
                  <span
                    onClick={() => addToFav(person)}
                    className="hover:text-orange-600 focus:outline-none  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
                  >
                    <AiFillStar
                      color={
                        favorite.findIndex((el) => el.id === person.id) > -1
                          ? "red"
                          : "black"
                      }
                      fontSize={20}
                    />
                  </span>
                  <span
                    onClick={() => onUserDelete(person.id)}
                    className="hover:text-orange-600 focus:outline-none  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
                  >
                    <MdDelete fontSize={20} />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
