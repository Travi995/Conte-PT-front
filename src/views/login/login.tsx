import FormLogin from "../../components/formLogin/formLogin"

const LoginView = ()=>{


    return <div className="  h-max bg-gray-300 shadow rounded p-4">
        <section className="flex w-full">
            <h1 className="w-full text-center font-medium">Sign In To Eccomerce</h1>
        </section>
        <FormLogin/>
    </div>
}

export default LoginView