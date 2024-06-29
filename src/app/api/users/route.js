import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../models/user";
export async function POST(request) {
  try {
    const body = await request.json();

    const userData = body;

    if (!userData.name || !userData.email || !userData.password) {
      return NextResponse.json([
        { message: "Faltan campos por llenar" },
        { status: 400 },
      ]);
    }

    // Verificar correos duplicados
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        { message: "El correo ya esta registrado" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await User.create(userData);
    return NextResponse.json(
      { message: "Usuario creado exitosamente" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
