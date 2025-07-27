import React from "react";

const Login = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="bg-white shadow rounded p-4"
        style={{
          width: "100%",
          maxWidth: "900px",
          minWidth: "300px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#a30000" }}>
          Iniciar Sesión
        </h2>
        <form className="d-flex flex-column gap-4">
          <div>
            <label htmlFor="email" className="form-label fw-bold">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label fw-bold">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="btn fw-bold"
            style={{ backgroundColor: "#a30000", color: "#fff" }}
          >
            Ingresar
          </button>
        </form>
        <p className="mt-4 text-center text-muted" style={{ fontSize: "0.9rem" }}>
          © Corralón Cura Brochero
        </p>
      </div>
    </div>
  );
};

export default Login;
