const estudiantes = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 28 },
];

export default function TablaEstudiantes() {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((persona, index) => (
          <tr key={index}>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
