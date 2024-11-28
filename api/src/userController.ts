import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, password, email, phone } = req.body;

    if (!name || !password || !email || !phone) {
      res.status(400).json({ error: "Todos os campos são obrigatórios." });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name, password, email, phone },
    });

    res.status(201).json(newUser);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(409).json({ error: "O email já está em uso." });
    } else {
      res.status(500).json({ error: "Erro ao criar o usuário." });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validar dados de entrada
    if (!email || !password) {
      res.status(400).json({ error: "Email e senha são obrigatórios." });
      return;
    }

    // Verificar se o usuário existe no banco de dados
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado." });
      return;
    }

    res.status(200).json({ message: "Login realizado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar login." });
  }
};
