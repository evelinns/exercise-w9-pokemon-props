// Destructure pokemon types props here :)
export const Type = (props) => {
  return (
    <div>
      <strong>Pokemon Type: {" "}</strong> 
      {props.type.map((t, index) => (
        <span key={index}>
          {t}
          {index < props.type.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>);
};