import React, { useState, useEffect } from "react";
import { Informacion } from "../../bd/Datos";
import { Button, Modal } from "react-bootstrap";

function ViewCalificaciones() {


  const [info, setInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    matricula:'',
    nombre:"",
    apellidos:'',
    curp:''
  });

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  const obtenerValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarInformacion=()=>{
    console.log(values);
  Informacion.push(values);
  }

  const mostrarInfo = () => {
    setInfo(Informacion);
    //console.log();
  };

  const eliminarInfo = () => {
    Informacion.pop();
    console.log("Dato eliminado");
    mostrarInfo();
  };
  const editarInfo = () => {
    alert("Dato editado");
  };

  useEffect(() => {
    mostrarInfo();
  }, []);

  return (
    <>
      <div className="row">
        <Button variant="primary" onClick={abrirModal}>
          Agregar estudiante...
        </Button>

        <Modal show={showModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Matricula
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inhgresa la matricula"
                  name="matricula"
                  onChange={obtenerValues}
                  value={values.matricula}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa tu nombre"
                  name="nombre"
                  onChange={obtenerValues}
                  value={values.nombre}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Matricula
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inhgresa los apellidos"
                  name="apellidos"
                  onChange={obtenerValues}
                  value={values.apellidos}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Matricula
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inhgresa la curp"
                  name="curp"
                  onChange={obtenerValues}
                  value={values.curp}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Close
            </Button>
            <Button variant="primary" onClick={guardarInformacion}>
             Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Matricula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Curp</th>
            <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {info.map((values, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{values.matricula}</td>
                <td>{values.nombre}</td>
                <td>{values.apellidos}</td>
                <td>{values.curp}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={editarInfo}
                  >
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={eliminarInfo}
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ViewCalificaciones;
