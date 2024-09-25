import React, { useState } from 'react';
import './App.css';
import SelectPizzas from './selectpizzas';
import SelectLomos from './selectlomos';
import FormPropsTextFields from './interfazPrincipal';

interface OrderDetails {
  pizzas: string;
  cantidadPizzas: string;
  lomos: string;
  cantidadLomos: string;
  nombreUsuario: string;
  direccionUsuario: string;
  telefonoUsuario: string;
  enviarPedido: boolean;
}

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Controla el paso actual
  const [message, setMessage] = useState<string>('¡Hace tu pedido!');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [nombreUsuario, setNombreUsuario] = useState<string>('');
  const [direccionUsuario, setDireccionUsuario] = useState<string>('');
  const [telefonoUsuario, setTelefonoUsuario] = useState<string>(''); // Nuevo estado para el nombre de usuario
  const [enviarPedido, setEnviarPedido] = useState<boolean>(false);

  const [selectedPizzas, setSelectedPizzas] = useState<string>('');
  const [cantidadPizzas, setCantidadPizzas] = useState<string>('');
  const [selectedLomos, setSelectedLomos] = useState<string>('');
  const [cantidadLomos, setCantidadLomos] = useState<string>('');

  // Maneja el clic para avanzar al siguiente paso
  const handleNextStep = () => {
    if (step === 1 && nombreUsuario && telefonoUsuario ) {
      setStep(2); // Ir a la selección de pizzas y lomos
    } else if (step === 2) {
      // Almacenar los detalles del pedido y avanzar al resumen
      setOrderDetails({
        pizzas: selectedPizzas,
        cantidadPizzas: cantidadPizzas,
        lomos: selectedLomos,
        cantidadLomos: cantidadLomos,
        nombreUsuario: nombreUsuario,
        direccionUsuario: direccionUsuario,
        telefonoUsuario: telefonoUsuario,
        enviarPedido: enviarPedido,
      });
      setStep(3); // Ir al resumen del pedido
    }
  };

  // Maneja el clic para volver al paso anterior
  const handleBack = () => {
    setStep(step - 1); // Volver al paso anterior
  };

  return (
    <div className="App">
      <header className="App-header">
        {step === 1 && (
          <div>
            <h1>Ingresa tus datos</h1>
            <FormPropsTextFields
              setNombre={setNombreUsuario} 
              setDireccion={setDireccionUsuario}
              setTelefono={setTelefonoUsuario}
              setEnviarPedido={setEnviarPedido} 
            />
            <button onClick={handleNextStep} className="App-button" disabled={!nombreUsuario || !telefonoUsuario} >
              Siguiente
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1>{message}</h1>
            <SelectPizzas
              setPizzas={setSelectedPizzas}
              setCantidadPizzas={setCantidadPizzas}
            />
            <SelectLomos
              setLomos={setSelectedLomos}
              setCantidadLomos={setCantidadLomos}
            />
            <button onClick={handleBack} className="App-button">
              Volver
            </button>
            <button onClick={handleNextStep} className="App-button">
              Guardar
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1>Resumen de Pedido</h1>
            <p>{`¿Enviar Pedido?: ${orderDetails?.enviarPedido ? 'Sí' : 'No'}`}</p>
            <p>{`Usuario: ${orderDetails?.nombreUsuario}`}</p>
            <p>{`Dirección: ${orderDetails?.direccionUsuario}`}</p>
            <p>{`Teléfono: ${orderDetails?.telefonoUsuario}`}</p>
            <p>{`Pizzas: ${orderDetails?.pizzas} - Cantidad: ${orderDetails?.cantidadPizzas}`}</p>
            <p>{`Lomos: ${orderDetails?.lomos} - Cantidad: ${orderDetails?.cantidadLomos}`}</p>
            <button onClick={handleBack} className="App-button">
              Volver
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;