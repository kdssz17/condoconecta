const { validarReserva } = require('../src/reservas');

describe('validarReserva', () => {
  test('aceita reserva com área informada', () => {
    expect(validarReserva('2026-12-10', 'Salão de Festas')).toEqual({ valido: true });
  });

  test('rejeita reserva sem área informada', () => {
    expect(validarReserva('2026-12-10')).toEqual({
      valido: false,
      erro: 'Área não informada',
    });
  });
});
