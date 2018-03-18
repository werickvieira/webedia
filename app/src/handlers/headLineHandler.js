import REQ from '../request';
import { apiURL, apiKEY } from '../config';

const getHeadLineHandler = (req, res) => {
  const {
    singleParam = 'globo,axios,google-news-au,lequipe',
    pageSize = 7,
    page = 1,
  } = req.params;

  const newURL = `${apiURL}/top-headlines?sources=${singleParam}&pageSize=${pageSize}&page=${page}&apiKEY=${apiKEY}`;
  REQ(newURL)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
};

export default getHeadLineHandler;
