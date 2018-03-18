import REQ from '../request';
import { apiURL, apiKEY } from '../config';

const postSearchHandler = (req, res) => {
  const { q = 'bitcoin', pageSize = 7, page = 1 } = req.params;
  const newURL = `${apiURL}/everything?q=${q}&pageSize=${pageSize}&page=${page}&apiKEY=${apiKEY}`;
  REQ(newURL)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
};

export default postSearchHandler;
