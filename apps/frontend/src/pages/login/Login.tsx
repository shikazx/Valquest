import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  useForm,
  type SubmitHandler
 } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface LoginInput {
  email: string
  password: string
}


function Login() {
  const { 
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm({
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => console.log(data)

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-auto bg-[#111823] self-">
        <Card className='w-1/4 h-full mb-200 mt-100 px-12 pt-20 pb-60 self-center self bg-[#f0ece3] border-0'>
          <CardHeader>
            <CardTitle className="text-6xl font-black mb-5">
              Login 
            </CardTitle>
            <CardDescription className="text-4xl font-italic">
              Enter your details to login
            </CardDescription>
          </CardHeader>
          <CardContent className="my-10">
          <form id="login-form" onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
            <div className="flex flex-col gap-20">
              <div className="grid gap-2">
                <Label className="text-2xl" htmlFor="email">Email</Label>
                <Input
                  {...register("email", { required: true })}
                  className="!h-16 !bg-[#d4d3d3]"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2 mb-10">
                <div className="flex items-center">
                  <Label className="text-2xl" htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                  {...register("password", { required: true })}
                  className="!h-16 !bg-[#d4d3d3]" 
                  id="password" 
                  type="password" 
                  required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-10">
          <Button 
            type="submit" 
            className="w-full !h-16 !text-3xl"
            form="login-form">
            Login
          </Button>
          <Button type="submit" className="w-full !h-16 !text-3xl !bg-[#e66060]">
            Signup
          </Button>
        </CardFooter>
        </Card>

      </div>
    </>
  )
}

export default Login
