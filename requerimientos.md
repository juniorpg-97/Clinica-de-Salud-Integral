Entidades principales

De la Clínica "Salud Integral", se tiene las siguientes entidades principales:

Paciente{id,nombre,apellido paterno,apellido materno,dni,email,telefono,fecha de nacimiento,creacion}
Médico{id,nombre,aplellidopaterno, apellido materno,especialidad,email,telefono,creacion}
Especialidad{id,nombre,descripcion}
Cita{id,idpaciente,idmedico,fecha,esatdo,creacion}

Relaciones

Paciente-Citas (1:n)
Un Paciente puede tener muchas Citas, pero una Cita pertenece a un solo Paciente
Citas-Medico (n:1)
Una Cita pertenece a un solo Medico, pero un Medico puede tener muchas Citas
Medico-Espeialidad (n:1)
Un Medico puede teber una sola especialidad, pero un especialidad puede pertenerces a varios medicos

Tablas

model paciente {
id Int @id @default(autoincrement())
nombre String
apellidoPaterno String
apellidoMaterno String?
dni String @unique
email String @unique
telefono String?
fechaNacimiento DateTime
creacion DateTime @default(now())

citas Cita[]
}

model Medico {
id Int @id @default(autoincrement())
nombre String
apellidoPaterno String
apellidoMaterno String?
especialidadId Int
email String @unique
telefono String?
creacion DateTime @default(now())

especialidad Especialidad @relation(fields: [especialidadId], references: [id])
citas Cita[]
}

model Especialidad {
id Int @id @default(autoincrement())
nombre String @unique
descripcion String?

medicos Medico[]
}

model Cita {
id Int @id @default(autoincrement())
pacienteId Int
medicoId Int
fecha DateTime
estado EstadoCita @default(PROGRAMADA)
creacion DateTime @default(now())

paciente Paciente @relation(fields: [pacienteId], references: [id])
medico Medico @relation(fields: [medicoId], references: [id])
}
