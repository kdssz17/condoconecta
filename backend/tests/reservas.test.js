const { validarReserva, formatarDataLocal } = require('../src/reservas');

function diaRelativo(deslocamento) {
  const d = new Date();
  d.setDate(d.getDate() + deslocamento);
  return formatarDataLocal(d);
}

describe('validarReserva', () => {
  test('aceita reserva com área informada', () => {
    expect(validarReserva(diaRelativo(1), 'Salão de Festas')).toEqual({ valido: true });
  });

  test('rejeita reserva sem área informada', () => {
    expect(validarReserva(diaRelativo(1))).toEqual({
      valido: false,
      erro: 'Área não informada',
    });
  });

  test('rejeita reserva com data de ontem', () => {
    expect(validarReserva(diaRelativo(-1), 'Salão de Festas')).toEqual({
      valido: false,
      erro: 'Data no passado',
    });
  });

  test('aceita reserva com data de hoje', () => {
    expect(validarReserva(diaRelativo(0), 'Salão de Festas')).toEqual({ valido: true });
  });

  test('aceita reserva com data de amanhã', () => {
    expect(validarReserva(diaRelativo(1), 'Salão de Festas')).toEqual({ valido: true });
  });
});
