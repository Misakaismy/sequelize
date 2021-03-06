/* 這張是DB看的語法 要建什麼項目column */
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
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('users');
}