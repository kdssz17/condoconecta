/**
 * Valida os dados de uma reserva de área comum.
 *
 * Por enquanto verifica apenas se a área foi informada.
 *
 * @param {string} data - Data da reserva.
 * @param {string} area - Área comum a ser reservada.
 * @returns {{ valido: boolean, erro?: string }}
 */
function validarReserva(data, area) {
  if (!area) {
    return { valido: false, erro: 'Área não informada' };
  }

  return { valido: true };
}

module.exports = { validarReserva };
