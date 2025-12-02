import dotenv from "dotenv";
dotenv.config();
import corredoresModelMemory from "../corredor.models.js";
import corredoresModelFS from "../corredor.models.fs.js";

const Factory = async (type = "MEM") => {
  switch (type.toUpperCase()) {
    case "FS":
      console.log("Persistencia con File System (DAO)");
      return corredoresModelFS;

    case "MEM":
      console.log("Persistencia en memoria (DAO)");
      return corredoresModelMemory;

    default:
      console.log("Persistencia por defecto (MEM)");
      return corredoresModelMemory;
  }
};

export default Factory;
