import api from "./api"

export const create = async (data) => {

    try{

        const result = await api.post("/patient", data)

        return{
            sucess: result.status == 200,
            data: result.data
        }

    }catch (error){

        return{
            error: error
        }
    }
}