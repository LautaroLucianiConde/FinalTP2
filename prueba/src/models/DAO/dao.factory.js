import usersModelMemory from "../user.models.js";
import usersModelFS from "../user.models.fs.js";

const Factory = async (type = "MEM") => {
  switch (type.toUpperCase()) {
    case "FS":
      console.log("Persistencia con File System (DAO)");
      return usersModelFS;

    case "MEM":
      console.log("Persistencia en memoria (DAO)");
      return usersModelMemory;

    default:
      console.log("Persistencia por defecto (MEM)");
      return usersModelMemory;
  }
};

export default Factory;
