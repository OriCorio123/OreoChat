import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from "@/components/ui/toast"




const login = async (email, password) => {
    const response = await axios.post('http://localhost:8000/api/user/login', { email, password }, { withCredentials: true })
    console.log(response.data.message)
    alert(`${response.data.message}`)
}

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email);
        console.log(password);
        console.log("login clicked")
        try {
            await login(email, password)
            navigate('/', { replace: true });
        } catch (error) {
            console.log("SOMETHING GOT FUCKED: ", error.response?.data?.message || error.message)
            toast.add({
                type: "error",
                description: `${error.response?.data?.message || error.message}`
            })
        }
    }
    return (
        <div className="min-h-[calc(100dvh-3.5rem-1px)] w-full flex items-center justify-center p-4" >
            <Card className='w-full max-w-sm justify-center align-middle'>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your email and password</CardDescription>
                    <CardAction>
                        <Link to='/register'>
                            <Button>Sign Up</Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => {
                        handleSubmit(e)

                    }}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input placeholder='oreo@gmail.com' name='email' id='email' type='email' required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link to='/logout' className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</Link>
                                </div>
                                <Input type='password' id='password' name='password' required />
                            </div>
                        </div>
                        <CardContent>
                            <CardFooter>
                                <Button type='submit' className='w-full'>Login</Button>
                            </CardFooter>
                        </CardContent>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login