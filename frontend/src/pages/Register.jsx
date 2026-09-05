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
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password");
        try {
            const response = await axios.post('http://localhost:8000/api/user/register',{username,email,password})
            console.log(`username:${username} email:${email} password:${password}`)
            console.log(response.data.message)
            alert(`${response.data.message}`)
            navigate('/login',{replace:true})
        } catch (error) {
            console.log("an error occured: ",error.response?.data?.message || error.message)
        }
    }
    return (
        <div className="min-h-[calc(100dvh-3.5rem-1px)] w-full flex items-center justify-center p-4" >
            <Card className='w-full max-w-sm justify-center align-middle'>
                <CardHeader>
                    <CardTitle>Register new account</CardTitle>
                    <CardDescription>Enter credentials</CardDescription>
                    <CardAction>
                        <Link to='/login'>
                        <Button>Log In</Button>
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
                                <Label htmlFor="username">Username</Label>
                                <Input type='text' name='username' placeholder='username' required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input type='password' id='password' name='password' required />
                            </div>
                        </div>
                        <CardContent>
                            <CardFooter>
                                <Button type='submit' className='w-full'>Sign Up</Button>
                            </CardFooter>
                        </CardContent>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register