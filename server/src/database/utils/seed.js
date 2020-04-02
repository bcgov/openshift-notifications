import sequelize from '..';

/** Posts */
(async () => {
  try {
    await sequelize.sync({ force: true });

    const QueryInterface = sequelize.getQueryInterface();
    const dummyPosts = [...Array(10)].map((item, i) => ({
      message: `Dummy post ${i + 1}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await QueryInterface.bulkInsert('Posts', dummyPosts);
    console.log('Posts seeded!');
  } catch (e) {
    console.error('Error:', e);
  } finally {
    process.exit();
  }
})();
