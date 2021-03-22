export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('users',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        email:{
            type:Sequelize.STRING(50),
            unique:true, 
        },
        password:{
            type:Sequelize.STRING(60),
        },
        email_verified:{
            type:Sequelize.DATE,
        },
        createAT:{
            type:Sequelize.DATE,
            allowNull:true,
        },
        updateAT:{
            type:Sequelize.DATE,
            allowNull:true,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('users');
}