module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('todo', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('DONE', 'UNDO'),
        allowNull: false
      }
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('todo')
  }
}
