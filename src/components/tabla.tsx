import Table from 'react-bootstrap/Table';

const estudiantes = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 28 },
];

export default function TablaEstudiantes() {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((persona) => (
          <tr key={persona.id}>
            <td>{persona.id}</td>
            <td>{persona.nombre}</td>
            <td>{persona.edad}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
