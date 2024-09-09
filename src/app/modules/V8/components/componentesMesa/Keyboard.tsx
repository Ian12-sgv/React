import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css"; // Importa los estilos CSS

const MyKeyboard = () => {
  const onKeyPress = (button: string) => {
    console.log("Botón presionado:", button);
    // Aquí puedes manejar la lógica según el botón presionado
  };

  return (
    <div>
      <Keyboard
        onChange={(input) => console.log("Entrada actual:", input)}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default MyKeyboard;
