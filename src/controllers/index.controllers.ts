import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM tasks");
    console.log(response.rows);
    return res.status(200).json(response.rows);
  } catch (er) {
    console.log(er);
    return res.status(500).json("Internal server error");
  }
};

export const getTaskById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query(
    "SELECT * FROM tasks WHERE id=$1",
    [id]
  );
  return res.json(response.rows);
};
export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { taskName, description } = req.body;
    return res.send("received");
  } catch (er) {
    console.log(er);
    return res.status(500).json("internal server error");
  }
};
// export const updateTask = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {};
// export const deleteTask = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {};
