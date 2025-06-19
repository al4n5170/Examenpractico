import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const RegistroForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      correo: '',
      contrasena: '',
      confirmarContrasena: '',
      terminos: false,
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .required('Requerido'),
      correo: Yup.string()
        .email('Correo no válido')
        .required('Requerido'),
      contrasena: Yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Requerido'),
      confirmarContrasena: Yup.string()
        .oneOf([Yup.ref('contrasena'), undefined], 'Las contraseñas no coinciden')
        .required('Requerido'),
      terminos: Yup.boolean()
        .oneOf([true], 'Debes aceptar los términos y condiciones'),
    }),
    onSubmit: (values) => {
      alert('Formulario enviado con éxito');
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        backgroundColor: 'white',
        padding: '30px',
        maxWidth: '400px',
        margin: 'auto',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Formulario de Registro</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>Nombre completo:</label>
        <input
          type="text"
          name="nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {formik.touched.nombre && formik.errors.nombre && (
          <div style={{ color: 'red' }}>{formik.errors.nombre}</div>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Correo electrónico:</label>
        <input
          type="email"
          name="correo"
          onChange={formik.handleChange}
          value={formik.values.correo}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {formik.touched.correo && formik.errors.correo && (
          <div style={{ color: 'red' }}>{formik.errors.correo}</div>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Contraseña:</label>
        <input
          type="password"
          name="contrasena"
          onChange={formik.handleChange}
          value={formik.values.contrasena}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {formik.touched.contrasena && formik.errors.contrasena && (
          <div style={{ color: 'red' }}>{formik.errors.contrasena}</div>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmarContrasena"
          onChange={formik.handleChange}
          value={formik.values.confirmarContrasena}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {formik.touched.confirmarContrasena && formik.errors.confirmarContrasena && (
          <div style={{ color: 'red' }}>{formik.errors.confirmarContrasena}</div>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            name="terminos"
            onChange={formik.handleChange}
            checked={formik.values.terminos}
          />
          {' '}
          Acepto los términos y condiciones
        </label>
        {formik.touched.terminos && formik.errors.terminos && (
          <div style={{ color: 'red' }}>{formik.errors.terminos}</div>
        )}
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Registrarse
      </button>
    </form>
  );
};

export default RegistroForm;
