import React from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import mainHOC from "../../HOC/mainHOC";

const Main: React.FC = mainHOC(({ id, handleChange, handleSubmit }) => {
  return (
    <Box>
      <div className=" w-full flex items-centre justify-center">
        <h2 className=" text-2xl text-blue-500">Մինչ թեստին անցնելը լրացրեք ձեր տվյալները</h2>
      </div>
      <form
        action=""
        className=" w-full flex items-center flex-col gap-4 font-[Quicksand]"
        onSubmit={handleSubmit}
      >
        <div className=" w-full grid grid-cols-2 gap-4">
          <div className=" flex items-start flex-col gap-2">
            <label htmlFor={`${id}firstName`}>Լրացրեք ձեր անունը:</label>
            <input
              type="text"
              id={`${id}firstName`}
              className=" w-full h-10 px-2 border-2 border-gray-300 rounded-sm"
              placeholder="Անուն"
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className=" flex items-start flex-col gap-2">
            <label htmlFor={`${id}lastName`}>Լրացրեք ձեր ազգանունը:</label>
            <input
              type="text"
              name="lastName"
              id={`${id}lastName`}
              className=" w-full h-10 px-2 border-2 border-gray-300 rounded-sm"
              placeholder="Ազգանուն"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" w-full flex items-start flex-col gap-2">
          <label htmlFor={`${id}email`}>Լրացրեք ձեր Էլ․ հասցեն:</label>
          <input
            type="email"
            name="email"
            id={`${id}email`}
            className=" w-full h-10 px-2 border-2 border-gray-300 rounded-sm"
            placeholder="Էլ․ հասցե"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button onClick={() => {}}>Անցնել թեստին</Button>
        </div>
      </form>
    </Box>
  );
});

export default Main;
