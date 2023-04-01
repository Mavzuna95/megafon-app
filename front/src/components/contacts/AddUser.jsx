import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddUser({ newUsers, setNewUsers }) {
  const [addUsers, setAddUsers] = useState({
    name: "",
    lastname: "",
    role: "",
    phone: "",
    img: "",
  });

  const navigate = useNavigate();

  const addNewUser = (user) => {
    const newPerson = [...newUsers, user];
    setNewUsers(newPerson);
  };

  const onAddUserChange = (e) => {
    e.preventDefault();
    setAddUsers({
      ...addUsers,
      [e.target.name]: e.target.value,
    });
  };

  const onAddClick = (e) => {
    e.preventDefault();
    if (
      addUsers.name === "" ||
      addUsers.lastname === "" ||
      addUsers.role === "" ||
      addUsers.phone === "" ||
      addUsers.img === ""
    ) {
      toast.success("Запольните все поля!!!");
    } else {
      const user = {
        ...addUsers,
        id: Math.random(),
      };
      fetch("http://localhost:3003/add_users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      alert("Ползователь добавлен!");

      addNewUser(user);
      setAddUsers("");
      navigate("/");
    }
  };
  return (
    <div className="isolate bg-white py-24 px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Добавить пользователя
        </h2>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Имя
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                onChange={(e) => onAddUserChange(e)}
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Фамилия
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                onChange={(e) => onAddUserChange(e)}
                name="lastname"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Профессия
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                onChange={(e) => onAddUserChange(e)}
                name="role"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Телефон
            </label>
            <div className="mt-1.5">
              <input
                type={"tel"}
                name="phone"
                onChange={(e) => onAddUserChange(e)}
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Фотография
            </label>
            <div className="mt-1.5">
              <input
                name="img"
                onChange={(e) => onAddUserChange(e)}
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={onAddClick}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Добавить
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
