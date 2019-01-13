const app = require('./server/app');
const port = 4000
app.listen(4000, () => {
  console.log(`Listen on port ${port}`);
});
