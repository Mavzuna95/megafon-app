/* eslint-disable jsx-a11y/no-redundant-roles */
import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
export default function Users({ newUsers, setNewUsers, addToFav, favorite }) {
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
    <div className=" py-4 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Познакомьтесь наши пользователи
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-10 xl:col-span-2"
        >
          {newUsers.map((person) => (
            <li key={person.id}>
              <div className="border w-52 h-52 rounded bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-4 items-center gap-x-6">
                <div className="justify-center">
                  <img
                    className="h-20 w-20 cursor-pointer border rounded-full"
                    src={person.img}
                    alt=""
                  />
                </div>

                <div>
                  <h2 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name} {person.lastname}
                  </h2>
                  <p className="text-sm font-semibold leading-6 text-indigo-900">
                    {person.role}
                  </p>
                </div>

                <div className="flex my-4">
                  <span
                    onClick={() => addToFav(person)}
                    className=" hover:text-orange-500 text-white cursor-pointer"
                  >
                    <AiFillStar
                      color={
                        favorite.findIndex((el) => el.id === person.id) > -1
                          ? "red"
                          : "white"
                      }
                      fontSize={20}
                    />
                  </span>
                  <span
                    onClick={() => onUserDelete(person.id)}
                    className="hover:text-orange-500 text-white  cursor-pointer"
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
