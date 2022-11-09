import api from "./api"

export const create = async (data) => {

    try{

        const result = await api.post("/patient", data)

        return{
            sucess: result.status == 201,
            data: result.data
        }

    }catch (error){

        return{
            error: error
        }
    }
}

export const listAll = async () => {

    try{

        const response = await api.get("/patient")
        const result = response.data

        return{
            sucess: response.status == 200,
            data: result
        }

    }catch (error){

        return{
            error: error
        }
    }
}