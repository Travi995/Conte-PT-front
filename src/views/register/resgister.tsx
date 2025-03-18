import FormRegister from "../../components/formRegister/formRegister"


const RegisterView = ()=>{


    return <div className="h-max bg-gray-300 shadow rounded p-4">
         <section className="flex w-full">
            <h1 className="w-full text-center font-medium">Register To Eccomerce</h1>
        </section>
        <FormRegister/>
    </div>
}

export default RegisterView