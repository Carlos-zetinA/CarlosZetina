import React from "react";

function Formularioboot() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          
        </div>
        <div className="col-4">
          <div class="card">
            <div class="card-header">Formulario de datos</div>
            <div class="card-body">
              <h5 class="card-title">Datos personales</h5>
              <p class="card-text">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
                  />
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Another input placeholder"
                  />
                </div>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          
        </div>
      </div>
    </>
  );
}

export default Formularioboot;