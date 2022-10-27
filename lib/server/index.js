const app = require("./app");

const PORT = process.env.API_PORT || 3000;

async function init() {
  // await db.connect();
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

init();
