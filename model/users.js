const { DataTypes } = require("sequelize")
const sequelize = require("../helpers/bd")

const userModel = sequelize.define('Usuarios',
    {
        id: {
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
        voluntario: DataTypes.BOOLEAN
    }

)

sequelize.sync({ force: false })

module.exports = {

    list: async function () {
        const user = await userModel.findAll();

        return user;
    },

    save: async function (nome, cpf, idade, rua, cidade, telefone, email, apoiador, voluntario) {

        const user = userModel.create({
            nome: nome,
            cpf: cpf,
            idade: idade,
            rua: rua,
            cidade: cidade,
            telefone: telefone,
            email: email,
            apoiador: apoiador,
            voluntario: voluntario
        })
        return user;
    },

    update: async function (id, nome, cpf, idade, rua, cidade, telefone, email, apoiador, voluntario) {
        return await userModel.update({
            nome: nome, cpf: cpf, idade: idade, rua: rua, cidade: cidade,
            telefone: telefone, email: email, apoiador: apoiador, voluntario: voluntario
        },
            {
                where: { id: id }
            })
    },

    delete: async function(id){
        const user = await userModel.findByPk(id)
        return user.destroy();
    },
    
    getById: async function(id){
        return await userModel.findByPk(id);
    }

}