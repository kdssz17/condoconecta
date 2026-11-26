/**
 * Formata uma data no fuso local como "YYYY-MM-DD".
 *
 * @param {Date} d
 * @returns {string}
 */
function formatarDataLocal(d) {
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

/**
 * Valida os dados de uma reserva de área comum.
 *
 * Verifica se a área foi informada e se a data não está no passado.
 *
 * @param {string} data - Data da reserva, no formato "YYYY-MM-DD".
 * @param {string} area - Área comum a ser reservada.
 * @returns {{ valido: boolean, erro?: string }}
 */
function validarReserva(data, area) {
  if (!area) {
    return { valido: false, erro: 'Área não informada' };
  }

  // Strings "YYYY-MM-DD" com zero à esquerda podem ser comparadas lexicograficamente.
  const hoje = formatarDataLocal(new Date());
  if (data < hoje) {
    return { valido: false, erro: 'Data no passado' };
  }

  return { valido: true };
}

module.exports = { validarReserva, formatarDataLocal };
