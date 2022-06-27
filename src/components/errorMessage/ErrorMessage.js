// import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <div
      className="error"
      style={{
        fontSize: "25px",
        margin: "0 auto",
      }}
    >
      Данный город не найден. Попробуй ещё раз.
    </div>
    // Не отображается картинка. ХЗ что делать.
    // <img
    //   style={{
    //     display: "block",
    //     width: "250px",
    //     height: "250px",
    //     objectFit: "contain",
    //     margin: "0 auto",
    //   }}
    //   scr={process.env.PUBLIC_URL + "/error.gif"}
    //   alt="Error"
    // />
  );
};

export default ErrorMessage;
