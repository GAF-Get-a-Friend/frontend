import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPet = async (req: Request, res: Response) => {
  try {
    const { name, sexo, idade, desc, race, photoLink } = req.body;

    // Validação básica
    if (!name || !sexo || idade === undefined || !desc || !race || !photoLink) {
      res.status(400).json({ error: "Todos os campos são obrigatórios." });
      return;
    }

    // Criar o pet no banco de dados
    const newPet = await prisma.pet.create({
      data: {
        name,
        sexo,
        idade,
        desc,
        race,
        photoLink,
      },
    });

    res.status(201).json({ message: "Pet criado com sucesso.", pet: newPet });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar o pet." });
  }
};

export const getPets = async (req: Request, res: Response) => {
  try {
    const { race } = req.query;

    const pets = await prisma.pet.findMany({
      where: race ? { race: String(race) } : undefined, // `undefined` faz o Prisma ignorar o filtro se 'race' não for fornecido
    });

    res.status(200).json({ pets });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pets." });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // O id do pet vem da URL
    const { name, sexo, idade, desc, race, photoLink } = req.body;

    // Validação dos dados obrigatórios
    if (!name || !sexo || idade === undefined || !desc || !race || !photoLink) {
      res.status(400).json({ error: "Todos os campos são obrigatórios." });
      return;
    }

    // Atualizando o pet no banco de dados
    const updatedPet = await prisma.pet.update({
      where: { id: Number(id) }, // O id do pet deve ser um número
      data: {
        name,
        sexo,
        idade,
        desc,
        race,
        photoLink,
      },
    });

    // Retorno da resposta com os dados atualizados
    res.status(200).json({
      message: "Pet atualizado com sucesso.",
      pet: updatedPet,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o pet." });
  }
};

export const deletePet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // O id do pet vem da URL

    // Verificar se o pet existe antes de tentar deletá-lo
    const petExists = await prisma.pet.findUnique({
      where: { id: Number(id) },
    });

    if (!petExists) {
      res.status(404).json({ error: "Pet não encontrado." });
      return;
    }

    // Excluindo o pet no banco de dados
    await prisma.pet.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Pet deletado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o pet." });
  }
};
