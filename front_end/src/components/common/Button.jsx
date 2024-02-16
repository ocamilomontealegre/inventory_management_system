// Button component for rendering a simple button element
export const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>{text}</button>
  );
};