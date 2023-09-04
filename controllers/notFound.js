const notFound = (req, res) => {
  res.status(notFoundCode).send({ message: 'Запрашиваемая страница не существует' });
};

module.exports = { notFound };
