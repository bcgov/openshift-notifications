import sequelize from '..';

(async () => {
  try {
    await sequelize.drop();
  } catch (e) {
    console.error('Error:', e);
  } finally {
    process.exit();
  }
})();
