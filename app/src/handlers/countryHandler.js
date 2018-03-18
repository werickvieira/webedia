import REQ from '../request';
import { apiURL, apiKEY } from '../config';

const getCountryHandler = (req, res) => {
  const { countrySigle = 'br', pageSize = 7, page = 1 } = req.params;
  const newURL = `${apiURL}/top-headlines?country=${countrySigle}&pageSize=${pageSize}&page=${page}&apiKEY=${apiKEY}`;
  REQ(newURL)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
};

export default getCountryHandler;

// Destaque
// https://newsapi.org/v2/top-headlines?sources=globo,axios,google-news-au,lequipe&pageSize=7&page=1

// Top pais
// https://newsapi.org/v2/top-headlines?country=us&pageSize=7

// Qualquer coisa
// https://newsapi.org/v2/everything?q=bitcoin&pageSize=7
