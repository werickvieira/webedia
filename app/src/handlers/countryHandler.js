const countryHandler = (req, res) => {
  const { name } = req.params;
  res.status(200).json(req.params);
  // res.render('index', { cor: name });
};

export default countryHandler;

// 74e52128cd93442cafe6799d792ad14f

// Destaque
// https://newsapi.org/v2/top-headlines?sources=globo,axios,google-news-au,lequipe&pageSize=7&page=3&apiKey=74e52128cd93442cafe6799d792ad14f

// Top pais
// https://newsapi.org/v2/top-headlines?country=us&pageSize=7&apiKey=74e52128cd93442cafe6799d792ad14f
// eu, br, ar, fr

// Qualquer coisa
// https://newsapi.org/v2/everything?q=bitcoin&pageSize=7&apiKey=74e52128cd93442cafe6799d792ad14f