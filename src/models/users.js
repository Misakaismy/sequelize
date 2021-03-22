export default (sequelize, DataTypes)=>{
    const users = sequelize.define('users',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type:DataTypes.STRING,
            unique: true,
        },
        password:{
            type: DataTypes.STRING(60),
        },
        email_verified:{
            type:DataTypes.DATE,
        },
        createAT:{
            type:DataTypes.DATE,
            allowNull:true,
            field: 'created_at',
        },
        updateAT:{
            type:DataTypes.DATE,
            allowNull:true,
            field: 'updated_at',
        },
    }, {
        sequelize,
        modelName:'users',
        freezeTableName: true,
        // timestamps: false,
    });
    return users;
}