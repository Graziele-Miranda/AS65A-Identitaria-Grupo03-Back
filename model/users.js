const {DataTypes} = require("sequelize")
const sequelize = require("../helpers/bd")

const UserModel = sequelize.define('Usuarios',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        rua: DataTypes.STRING,
        cidade: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        apoiador: DataTypes.BOOLEAN,
        doador: DataTypes.BOOLEAN
    }

)

sequelize.sync({force: true})

module.exports = {
    save: async function(nome, cpf, idade, rua, cidade, telefone, email, apoiador, doador){

        const user = UserModel.create({
            nome:nome,
            cpf:cpf,
            idade:idade,
            rua:rua,
            cidade:cidade,
            telefone:telefone,
            email:email,
            apoiador:apoiador,
            doador:doador
        })
    }
}