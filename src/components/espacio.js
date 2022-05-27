const Espacio = (props) => {
  console.log("props", props);

  const mostrarCuartos = () => {};

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="house.png" class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.espacio.name}</h5>
        <p className="card-text">{props.espacio.address}</p>
        <a href="#" class="btn btn-primary">
          Ver espacios
        </a>
      </div>
    </div>
  );
};

export default Espacio;
