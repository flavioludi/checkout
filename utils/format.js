const showCurrency = (value) => {
  if (!value) return null;
  return  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export {
  showCurrency,
}