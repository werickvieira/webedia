import { get } from 'https';

const REQ = options => (
  new Promise((resolve, reject) => {
    const req = get(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        resolve(JSON.parse(chunk));
      });
      // res.on('end', () => {
      //   console.log('No more data in response.');
      // });
    });

    req.on('error', (e) => {
      reject(e.message);
    });

    req.end();
  })
);

export default REQ;
