import React, { useState } from 'react';
import './Buscador.css'; 

const Buscador = () => {
  const [search, setSearch] = useState('');
  const data = [
    { id: 1, nombre: 'Maira Iris', apellidoPat: 'Marin' , apellidoMat: 'Avila',correo: 'mairairismarinavila@gmail.com',telefono:'5545380824'},
    
  ];

  const filteredData = data.filter(item =>
    item.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tabla-container">
      <input  type="text" placeholder="Buscar..." value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <table align='center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>ApellidoPat</th>
            <th>ApellidoMat</th>
            <th>Correo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellidoPat}</td>
              <td>{item.apellidoMat}</td>
              <td>{item.correo}</td>
              <td>{item.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buscador;
