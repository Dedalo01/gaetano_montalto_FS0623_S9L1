const ButtonComponent = (props) => {
  return (
    <button type="button" onClick={() => console.log(`button: ${props.name}`)}>
      {props.name}
    </button>
  );
};

export default ButtonComponent;
